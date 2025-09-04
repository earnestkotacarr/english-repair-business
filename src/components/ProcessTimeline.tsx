'use client'

import { useTranslations } from 'next-intl'
import { Search, RefreshCw, Package } from 'lucide-react'

export default function ProcessTimeline() {
  const t = useTranslations('process')

  const steps = [
    {
      icon: Search,
      title: t('step1.title'),
      description: t('step1.description'),
      time: t('step1.time'),
      details: [
        t('step1.details.0'),
        t('step1.details.1'),
        t('step1.details.2')
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: RefreshCw,
      title: t('step2.title'),
      description: t('step2.description'),
      time: t('step2.time'),
      details: [
        t('step2.details.0'),
        t('step2.details.1'),
        t('step2.details.2')
      ],
      color: 'from-erb-vermilion to-blue-700'
    },
    {
      icon: Package,
      title: t('step3.title'),
      description: t('step3.description'),
      time: t('step3.time'),
      details: [
        t('step3.details.0'),
        t('step3.details.1'),
        t('step3.details.2')
      ],
      color: 'from-green-500 to-green-600'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-erb-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-erb-navy mb-3">{t('title')}</h2>
          <p className="text-erb-gray-600 text-lg">{t('subtitle')}</p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={index} className="relative">
                  {/* Connection line (hidden on mobile, visible on desktop) */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-erb-gray-200 to-erb-gray-200 z-0" />
                  )}
                  
                  <div className="relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-erb-gray-100">
                    {/* Step number */}
                    <div className="absolute -top-3 -left-3 w-8 h-8 bg-erb-navy text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    
                    {/* Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center mb-4 mx-auto`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-bold text-erb-navy mb-2 text-center">
                      {step.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-erb-gray-600 text-sm mb-4 text-center">
                      {step.description}
                    </p>
                    
                    {/* Details */}
                    <ul className="space-y-2 mb-4">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-erb-gray-500">
                          <svg className="w-4 h-4 text-erb-vermilion mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {/* Timeline */}
                    <div className="pt-4 border-t border-erb-gray-100">
                      <span className="inline-flex items-center gap-1 text-xs text-erb-vermilion font-medium">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {step.time}
                      </span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}