import { type ReactNode } from 'react'
import { BackgroundGrid } from './BackgroundGrid'
import { useTheme } from '../providers/ThemeProvider'

export const RootLayout = ({ children }: { children: ReactNode }) => {
  const theme = useTheme()
  return (
    <div 
      className="relative min-h-screen w-full flex flex-col antialiased"
      style={{
        backgroundColor: theme.colors.background
      }}  
    >
      <BackgroundGrid />
      <main className="relative z-[1] flex-1">
        <div
          className="mx-auto w-full"
          style={{
            paddingTop: 'max(env(safe-area-inset-top, 0px), 0px)'
          }}
        >
          {children}
        </div>
      </main>
    </div>
  )
}