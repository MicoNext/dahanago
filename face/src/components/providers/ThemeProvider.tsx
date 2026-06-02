import React, { createContext, useContext, type ReactNode, type CSSProperties } from 'react'
import themeValues from './themeValues'

interface ThemeContextType {
  colors: typeof themeValues.colors
  gradients: typeof themeValues.gradients
  radius: typeof themeValues.radius
  font: typeof themeValues.font
  spacing: typeof themeValues.spacing
  animation: typeof themeValues.animation
  shadows: typeof themeValues.shadows
  breakpoints: typeof themeValues.breakpoints
  grid: typeof themeValues.grid
  backgroundStyle: CSSProperties
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const backgroundStyle: CSSProperties = {
    backgroundColor: '#FFFAF7',
  }

  const theme: ThemeContextType = {
    ...themeValues,
    backgroundStyle,
  }

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}