import { cn } from '@/lib/utils'

interface LokLogoProps {
  height?: number
  variant?: 'orange' | 'white' | 'black'
  className?: string
  showLabel?: boolean
}

export function LokLogo({ height = 28, variant = 'orange', className, showLabel = true }: LokLogoProps) {
  const color =
    variant === 'orange' ? '#F5501E' :
    variant === 'white'  ? '#FFFFFF' : '#000000'

  return (
    <svg
      height={height}
      viewBox="0 0 110 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('overflow-visible', className)}
      aria-label="LÕK Sports"
    >
      {/* L */}
      <text
        x="0" y="24"
        fontFamily="'Inter', 'Arial Black', sans-serif"
        fontWeight="900"
        fontSize="26"
        fill={color}
      >
        L
      </text>

      {/* Õ — O with tilde (combining character) */}
      <text
        x="18" y="24"
        fontFamily="'Inter', 'Arial Black', sans-serif"
        fontWeight="900"
        fontSize="26"
        fill={color}
      >
        Õ
      </text>

      {/* K */}
      <text
        x="42" y="24"
        fontFamily="'Inter', 'Arial Black', sans-serif"
        fontWeight="900"
        fontSize="26"
        fill={color}
      >
        K
      </text>

      {/* SPORTS label */}
      {showLabel && (
        <text
          x="68" y="24"
          fontFamily="'Inter', 'Arial', sans-serif"
          fontWeight="400"
          fontSize="10"
          fill={color}
          opacity="0.7"
          letterSpacing="1.5"
        >
          SPORTS
        </text>
      )}
    </svg>
  )
}

export function LokBadge({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border border-brand-500/40 bg-brand-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-400',
        className
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
      Patrocinado por LÕK
    </div>
  )
}
