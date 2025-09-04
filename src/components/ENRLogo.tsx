interface ENRLogoProps {
  className?: string
}

export default function ENRLogo({ className = "h-10" }: ENRLogoProps) {
  return (
    <svg 
      className={className}
      viewBox="0 0 160 40" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Hammer icon */}
      <g className="fill-erb-vermilion">
        {/* Hammer head */}
        <rect x="4" y="12" width="20" height="8" rx="1" />
        {/* Hammer handle */}
        <rect x="10" y="18" width="4" height="12" rx="1" />
      </g>
      
      {/* English Repair with Care text */}
      <text 
        x="32" 
        y="16" 
        className="fill-erb-navy font-bold text-sm"
        style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
      >
        English Repair
      </text>
      <text 
        x="32" 
        y="28" 
        className="fill-erb-vermilion font-medium text-xs italic"
        style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
      >
        with Care
      </text>
    </svg>
  )
}