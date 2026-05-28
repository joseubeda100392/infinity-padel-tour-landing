import { cn } from '@/lib/utils'

const ITEMS = [
  'INFINITY PADEL TOUR',
  'BY LÕK',
  'TEMPORADA 26/27',
  'PRÓXIMAMENTE',
  'ACCESO ANTICIPADO',
  'ALGO NUEVO SE ACERCA',
]

export function Marquee({ className }: { className?: string }) {
  const repeated = [...ITEMS, ...ITEMS]

  return (
    <div
      className={cn(
        'overflow-hidden border-y border-white/6 bg-[#0a0c10] py-3',
        className
      )}
      aria-hidden
    >
      <div className="marquee-track">
        {repeated.map((item, i) => (
          <span
            key={i}
            className="mx-8 inline-flex items-center gap-8 font-display text-lg uppercase tracking-widest text-gray-700 whitespace-nowrap"
          >
            {item}
            <span className="h-1 w-1 rounded-full bg-brand-500/60" />
          </span>
        ))}
      </div>
    </div>
  )
}
