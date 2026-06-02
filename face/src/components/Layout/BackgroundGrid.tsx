import { useRef, useEffect } from 'react'

interface Line {
  x: number
  opacity: number
  speed: number
  phase: number
}

export const BackgroundGrid = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const linesRef = useRef<Line[]>([])
  const animFrameRef = useRef<number>(0)
  const timeRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = window.innerWidth + 'px'
      canvas.style.height = window.innerHeight + 'px'
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.scale(dpr, dpr)
      initLines()
    }

    const initLines = () => {
      const w = window.innerWidth
      const spacing = 72

      const lines: Line[] = []

      for (let x = spacing; x < w; x += spacing) {
        lines.push({
          x,
          opacity: 0.04 + Math.random() * 0.06,
          speed: 0.2 + Math.random() * 0.4,
          phase: Math.random() * Math.PI * 2,
        })
      }

      linesRef.current = lines
    }

    resize()
    window.addEventListener('resize', resize)

    const animate = (timestamp: number) => {
      timeRef.current = timestamp * 0.001
      const h = window.innerHeight
      ctx.clearRect(0, 0, window.innerWidth, h)

      const t = timeRef.current

      linesRef.current.forEach((line) => {
        const pulse = Math.sin(t * line.speed + line.phase) * 0.02
        const alpha = Math.max(0.02, line.opacity + pulse)

        ctx.beginPath()
        ctx.moveTo(line.x, 0)
        ctx.lineTo(line.x, h)
        ctx.strokeStyle = `rgba(252, 45, 88, ${alpha})`
        ctx.lineWidth = 0.5
        ctx.stroke()
      })

      animFrameRef.current = requestAnimationFrame(animate)
    }

    animFrameRef.current = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animFrameRef.current)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  )
}