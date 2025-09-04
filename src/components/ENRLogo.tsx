interface ENRLogoProps {
  className?: string
}

export default function ENRLogo({ className = "h-10" }: ENRLogoProps) {
  return (
    <svg 
      className={className}
      viewBox="0 0 120 40" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background shape */}
      <rect x="0" y="5" width="30" height="30" rx="4" className="fill-erb-vermilion" />
      
      {/* ENR Letters in white */}
      <text 
        x="15" 
        y="26" 
        className="fill-white font-bold text-base"
        textAnchor="middle"
        style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
      >
        ENR
      </text>
      
      {/* English Repair text */}
      <text 
        x="38" 
        y="17" 
        className="fill-erb-navy font-semibold text-xs"
        style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
      >
        English
      </text>
      <text 
        x="38" 
        y="28" 
        className="fill-erb-gray-600 font-normal text-xs"
        style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
      >
        Repair
      </text>
    </svg>
  )
}