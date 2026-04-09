"use client"

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { type ThemeProviderProps } from 'next-themes'
import { useEffect, useState } from 'react'

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Force light mode by removing dark class
    document.documentElement.classList.remove('dark')
  }, [])

  if (!mounted) {
    return <div style={{ visibility: 'hidden' }}>{children}</div>
  }

  return (
    <NextThemesProvider 
      {...props} 
      defaultTheme="light"
      enableSystem={false}
      forcedTheme="light"
      attribute="class"
    >
      {children}
    </NextThemesProvider>
  )
}
