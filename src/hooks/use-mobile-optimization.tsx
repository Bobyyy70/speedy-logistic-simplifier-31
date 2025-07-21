
import { useEffect, useState } from "react"
import { useIsMobile } from "./use-mobile"

export function useMobileOptimization() {
  const isMobile = useIsMobile()
  const [touchSupported, setTouchSupported] = useState(false)

  useEffect(() => {
    setTouchSupported('ontouchstart' in window || navigator.maxTouchPoints > 0)
  }, [])

  const getOptimalTouchTarget = (baseSize: number) => {
    if (isMobile || touchSupported) {
      return Math.max(baseSize, 48) // Minimum 48px for touch
    }
    return baseSize
  }

  const getMobileSpacing = (baseSpacing: string) => {
    if (isMobile) {
      const spacingMap: Record<string, string> = {
        'space-y-2': 'space-y-3',
        'space-y-4': 'space-y-5',
        'space-y-6': 'space-y-8',
        'gap-2': 'gap-3',
        'gap-4': 'gap-5',
        'gap-6': 'gap-8',
        'p-2': 'p-3',
        'p-4': 'p-5',
        'p-6': 'p-8',
        'px-2': 'px-3',
        'px-4': 'px-5',
        'py-2': 'py-3',
        'py-4': 'py-5',
      }
      return spacingMap[baseSpacing] || baseSpacing
    }
    return baseSpacing
  }

  return {
    isMobile,
    touchSupported,
    getOptimalTouchTarget,
    getMobileSpacing,
  }
}
