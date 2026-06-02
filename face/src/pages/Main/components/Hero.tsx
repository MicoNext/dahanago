import { motion } from 'framer-motion'
import { HiEye } from 'react-icons/hi'

const BRAND_RED = '#FA2A55'

export const Hero = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="hero"
      className="relative min-w-screen min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: BRAND_RED }}
    >
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 70% 50% at 50% 40%, rgba(255,255,255,0.04) 0%, transparent 60%),
            radial-gradient(ellipse 35% 25% at 25% 70%, rgba(255,255,255,0.03) 0%, transparent 50%),
            radial-gradient(ellipse 30% 20% at 80% 30%, rgba(255,255,255,0.03) 0%, transparent 50%)
          `,
        }}
      />

      <div className="relative z-10 text-center px-6 w-full max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.3, ease: 'easeOut' }}
          className="flex items-center justify-center gap-4 sm:gap-6 mb-10 sm:mb-14"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="h-px flex-1 max-w-[50px] sm:max-w-[70px]"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.25))' }}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
          >
            <HiEye className="w-5 h-5 sm:w-6 sm:h-6 text-white/35" />
          </motion.div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 1, ease: [0.16, 1, 0.3, 1] }}
            className="h-px flex-1 max-w-[50px] sm:max-w-[70px]"
            style={{ background: 'linear-gradient(90deg, rgba(255,255,255,0.25), transparent)' }}
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.6, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-white leading-none"
          style={{
            fontFamily: "'Marck Script', cursive",
            fontSize: 'clamp(60px, 13vw, 150px)',
            fontWeight: 400,
            lineHeight: 1,
            textShadow: '0 4px 60px rgba(0,0,0,0.08)',
          }}
        >
          Даханаго
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 1.6, ease: 'easeOut' }}
          className="flex items-center justify-center gap-5 sm:gap-8 mt-8 sm:mt-10"
        >
          <motion.div
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.8, ease: 'easeOut' }}
            className="flex items-center gap-3"
          >
            <span
              className="text-white/35 text-[11px] sm:text-xs tracking-[0.25em] uppercase"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
              }}
            >
              ручная работа
            </span>
          </motion.div>

          <div className="w-0.5 h-3 sm:h-4 rounded-full bg-white/15" />

          <motion.div
            initial={{ opacity: 0, x: 8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 2, ease: 'easeOut' }}
            className="flex items-center gap-3"
          >
            <span
              className="text-white/35 text-[11px] sm:text-xs tracking-[0.25em] uppercase"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
              }}
            >
              с любовью
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.2, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-14 sm:mt-18"
        >
          <a
            href="#menu"
            onClick={(e) => {
              e.preventDefault()
              scrollTo('menu')
            }}
            className="inline-flex items-center justify-center gap-2 px-10 sm:px-14 py-3.5 sm:py-4 text-xs sm:text-sm transition-all duration-500 hover:-translate-y-0.5"
            style={{
              background: 'rgba(255,255,255,0.12)',
              border: '1px solid rgba(255,255,255,0.2)',
              color: '#FFFFFF',
              fontFamily: "'Inter', sans-serif",
              fontWeight: 500,
              letterSpacing: '0.06em',
            }}
          >
            Меню
          </a>

          <a
            href="#locations"
            onClick={(e) => {
              e.preventDefault()
              scrollTo('locations')
            }}
            className="inline-flex items-center justify-center gap-2 px-10 sm:px-14 py-3.5 sm:py-4 text-xs sm:text-sm transition-all duration-500 hover:-translate-y-0.5"
            style={{
              background: 'transparent',
              border: '1px solid rgba(255,255,255,0.1)',
              color: 'rgba(255,255,255,0.7)',
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              letterSpacing: '0.06em',
            }}
          >
            Адреса
          </a>
        </motion.div>
      </div>
    </section>
  )
}