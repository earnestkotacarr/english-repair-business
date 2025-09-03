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
      outcome: t('case1.outcome')
    },
    {
      industry: t('case2.industry'),
      problem: t('case2.problem'),
      solution: t('case2.solution'),
      outcome: t('case2.outcome')
    }
  ]

  return (
    <div className="py-16 bg-erb-gray-50">
      <div className="container">
        <h1 className="text-4xl font-bold text-center mb-12 text-erb-navy">{t('title')}</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
          {cases.map((caseStudy, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-erb-vermilion text-white text-xs font-medium rounded">
                  {caseStudy.industry}
                </span>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-bold text-erb-navy mb-1">Problem</h3>
                  <p className="text-sm text-erb-gray-500">{caseStudy.problem}</p>
                </div>
                
                <div>
                  <h3 className="text-sm font-bold text-erb-navy mb-1">Solution</h3>
                  <p className="text-sm text-erb-gray-500">{caseStudy.solution}</p>
                </div>
                
                <div className="pt-2 border-t border-erb-gray-200">
                  <h3 className="text-sm font-bold text-erb-navy mb-1">Outcome</h3>
                  <p className="text-sm font-medium text-erb-vermilion">{caseStudy.outcome}</p>
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