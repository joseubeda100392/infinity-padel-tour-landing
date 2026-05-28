import { cn } from '@/lib/utils'

interface IptLogoProps {
  height?: number
  variant?: 'light' | 'dark'
  className?: string
}

export function IptLogo({ height = 44, variant = 'light', className }: IptLogoProps) {
  const textColor   = variant === 'dark' ? '#111827' : '#FFFFFF'
  const subColor    = variant === 'dark' ? '#374151' : '#A0AEC0'
  const accentColor = '#a7fd7e'

  return (
    <svg
      height={height}
      viewBox="0 0 320 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('overflow-visible', className)}
      aria-label="Infinity Padel Tour"
    >
      {/* INFINITY — bold display */}
      <text
        x="0" y="32"
        fontFamily="'Inter', 'Arial Black', sans-serif"
        fontWeight="900"
        fontSize="32"
        fill={textColor}
        letterSpacing="-0.5"
      >
        INFINITY
      </text>

      {/* PADEL TOUR — medium tracking */}
      <text
        x="2" y="46"
        fontFamily="'Inter', 'Arial', sans-serif"
        fontWeight="500"
        fontSize="13"
        fill={subColor}
        letterSpacing="4"
      >
        PADEL TOUR
      </text>

      {/* Orange underline accent */}
      <rect x="0" y="35" width="200" height="2" rx="1" fill={accentColor} opacity="0.8" />
    </svg>
  )
}
