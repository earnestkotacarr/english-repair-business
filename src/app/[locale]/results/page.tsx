'use client'

import { useTranslations } from 'next-intl'
import BeforeAfterSlider from '@/components/BeforeAfterSlider'

export default function ResultsPage() {
  const t = useTranslations('results')

  const cases = [
    {
      industry: t('case1.industry'),
      problem: t('case1.problem'),
      solution: t('case1.solution'),
      outcome: t('case1.outcome'),
      isPrimary: true
    },
    {
      industry: t('case2.industry'),
      problem: t('case2.problem'),
      solution: t('case2.solution'),
      outcome: t('case2.outcome'),
      isPrimary: false
    }
  ]

  return (
    <div className="py-16 bg-gradient-to-b from-white to-erb-gray-50">
      <div className="container">
        <h1 className="text-4xl font-bold text-center mb-4 text-erb-navy">{t('title')}</h1>
        <p className="text-center text-erb-gray-600 mb-12 max-w-2xl mx-auto">
          Real client transformations with measurable impact on global business growth
        </p>
        
        <div className="max-w-5xl mx-auto mb-16 space-y-8">
          {cases.map((caseStudy, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all ${
                caseStudy.isPrimary 
                  ? 'p-8 border-2 border-erb-vermilion/20 transform scale-105' 
                  : 'p-6 border border-erb-gray-100'
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div>
                  <span className={`inline-block px-4 py-2 ${
                    caseStudy.isPrimary 
                      ? 'bg-gradient-to-r from-erb-vermilion to-blue-600 text-white text-base font-bold' 
                      : 'bg-erb-gray-100 text-erb-navy text-sm font-medium'
                  } rounded-lg`}>
                    {caseStudy.industry}
                  </span>
                </div>
                
                <div className={`mt-4 md:mt-0 ${
                  caseStudy.isPrimary 
                    ? 'text-2xl font-bold text-erb-vermilion' 
                    : 'text-xl font-medium text-erb-navy'
                }`}>
                  {caseStudy.outcome}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className={`${
                    caseStudy.isPrimary ? 'text-lg' : 'text-base'
                  } font-bold text-erb-navy mb-2 flex items-center gap-2`}>
                    <svg className="w-5 h-5 text-erb-vermilion" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Challenge
                  </h3>
                  <p className={`${
                    caseStudy.isPrimary ? 'text-base' : 'text-sm'
                  } text-erb-gray-600 leading-relaxed`}>
                    {caseStudy.problem}
                  </p>
                </div>
                
                <div>
                  <h3 className={`${
                    caseStudy.isPrimary ? 'text-lg' : 'text-base'
                  } font-bold text-erb-navy mb-2 flex items-center gap-2`}>
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Solution
                  </h3>
                  <p className={`${
                    caseStudy.isPrimary ? 'text-base' : 'text-sm'
                  } text-erb-gray-600 leading-relaxed`}>
                    {caseStudy.solution}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <BeforeAfterSlider />
      </div>
    </div>
  )
}