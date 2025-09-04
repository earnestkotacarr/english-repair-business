interface ENRLogoProps {
  className?: string
}

export default function ENRLogo({ className = "h-10" }: ENRLogoProps) {
  return (
    <svg 
      className={className}
      viewBox="0 0 180 40" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Better Hammer icon */}
      <g className="fill-erb-vermilion">
        {/* Hammer head (more realistic shape) */}
        <path d="M 6 14 L 24 14 L 24 10 L 26 10 L 26 20 L 24 20 L 24 16 L 6 16 Z" />
        {/* Hammer handle */}
        <rect x="11" y="15" width="4" height="14" rx="1" />
      </g>
      
      {/* English Repair with Care text - larger sizes */}
      <text 
        x="35" 
        y="18" 
        className="fill-erb-navy font-bold text-base"
        style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '16px' }}
      >
        English Repair
      </text>
      <text 
        x="35" 
        y="30" 
        className="fill-erb-vermilion font-medium italic"
        style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '13px' }}
      >
        with Care
      </text>
    </svg>
  )
}