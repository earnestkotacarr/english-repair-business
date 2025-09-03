'use client'

import { useTranslations } from 'next-intl'

export default function ProcessTimeline() {
  const t = useTranslations('process')

  const steps = [
    { title: t('step1.title'), description: t('step1.description'), time: t('step1.time') },
    { title: t('step2.title'), description: t('step2.description'), time: t('step2.time') },
    { title: t('step3.title'), description: t('step3.description'), time: t('step3.time') },
    { title: t('step4.title'), description: t('step4.description'), time: t('step4.time') },
    { title: t('step5.title'), description: t('step5.description'), time: t('step5.time') },
    { title: t('step6.title'), description: t('step6.description'), time: t('step6.time') },
    { title: t('step7.title'), description: t('step7.description'), time: t('step7.time') },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-erb-gray-50 to-white">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12 text-erb-navy">{t('title')}</h2>
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-erb-vermilion/20 via-erb-vermilion/40 to-erb-vermilion/20"></div>
            {steps.map((step, index) => (
              <div key={index} className="relative flex items-start mb-8">
                <div className="absolute left-8 w-4 h-4 bg-gradient-to-br from-erb-vermilion to-red-700 rounded-full -translate-x-1/2 z-10 ring-4 ring-white shadow-lg"></div>
                <div className="ml-16 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex-1 border border-erb-gray-100">
                  <h3 className="font-bold text-erb-navy mb-2">{step.title}</h3>
                  <p className="text-sm text-erb-gray-500 mb-2">{step.description}</p>
                  <span className="inline-flex items-center gap-1 text-xs text-erb-vermilion font-medium">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {step.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}