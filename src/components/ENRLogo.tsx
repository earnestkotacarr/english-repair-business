import Image from 'next/image'

interface ENRLogoProps {
  className?: string
  locale?: string
}

export default function ENRLogo({ className = "h-12", locale = 'ja' }: ENRLogoProps) {
  return (
    <div className={`flex items-center gap-0 ${className}`}>
      {/* User's hammer image */}
      <div className="relative h-full aspect-square">
        <Image
          src="/8C61A6E4-269D-4ED7-9710-8E9F5F5FCD6C-removebg-preview.png"
          alt="English Repair Logo"
          fill
          className="object-contain"
          priority
        />
      </div>
      
      {/* English Repair with Care text */}
      <div className="flex flex-col justify-center h-full gap-0.5 md:gap-1">
        <span className="text-erb-navy font-bold text-lg md:text-2xl leading-none">
          English Repair
        </span>
        <span className="text-erb-primary font-medium italic text-base md:text-lg leading-none">
          with Care
        </span>
      </div>
    </div>
  )
}