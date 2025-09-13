import Image from 'next/image'

interface ENRLogoProps {
  className?: string
  locale?: string
}

export default function ENRLogo({ className = "h-12", locale = 'ja' }: ENRLogoProps) {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {/* User's hammer image */}
      <div className="relative h-full aspect-square">
        <Image
          src="/FDDEE91D-52F0-45AF-82BB-37239CFAE023.jpg"
          alt="English Repair Logo"
          fill
          className="object-contain"
          priority
        />
      </div>
      
      {/* English Repair with Care text */}
      <div className="flex flex-col justify-center">
        <span className="text-erb-navy font-bold text-lg leading-tight">
          English Repair
        </span>
        <span className="text-erb-primary font-medium italic text-sm leading-tight">
          {locale === 'ja' ? 'ともに' : 'with Care'}
        </span>
      </div>
    </div>
  )
}