'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function ScrollPositionManager() {
  const pathname = usePathname()

  useEffect(() => {
    // Save scroll position before navigating away
    const saveScrollPosition = () => {
      if (typeof window !== 'undefined') {
        sessionStorage.setItem(`scrollPos-${pathname}`, window.scrollY.toString())
      }
    }

    // Restore scroll position when returning to page
    const restoreScrollPosition = () => {
      if (typeof window !== 'undefined') {
        const savedPosition = sessionStorage.getItem(`scrollPos-${pathname}`)
        if (savedPosition) {
          // Use setTimeout to ensure DOM is ready
          setTimeout(() => {
            window.scrollTo(0, parseInt(savedPosition, 10))
          }, 100)
        }
      }
    }

    // Save on navigation
    window.addEventListener('beforeunload', saveScrollPosition)
    
    // Also save when clicking any link
    const handleClick = () => {
      saveScrollPosition()
    }
    
    const links = document.querySelectorAll('a')
    links.forEach(link => {
      link.addEventListener('click', handleClick)
    })
    
    // Restore position
    restoreScrollPosition()

    return () => {
      window.removeEventListener('beforeunload', saveScrollPosition)
      links.forEach(link => {
        link.removeEventListener('click', handleClick)
      })
    }
  }, [pathname])

  return null
}