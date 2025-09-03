'use client'

import { useTranslations } from 'next-intl'

export default function AboutPage() {
  const t = useTranslations('about')

  return (
    <div className="py-16 bg-white">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-erb-navy">{t('title')}</h1>
          
          <div className="prose prose-lg">
            <p className="text-lg text-erb-gray-500 mb-8">{t('intro')}</p>
            
            <div className="bg-erb-gray-50 rounded-lg p-8 mb-8">
              <div className="flex items-start space-x-6">
                <div className="w-24 h-24 rounded-full bg-erb-gray-300 flex-shrink-0"></div>
                <div>
                  <h2 className="text-xl font-bold text-erb-navy mb-1">{t('founderName')}</h2>
                  <p className="text-sm text-erb-gray-500 mb-3">{t('founder')}</p>
                  <p className="text-sm text-erb-gray-600">{t('experience')}</p>
                </div>
              </div>
            </div>
            
            <div className="border-l-4 border-erb-vermilion pl-6 py-2">
              <p className="text-erb-gray-600 italic">{t('approach')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}