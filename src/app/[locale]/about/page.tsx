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
                <div className="w-24 h-24 rounded-full overflow-hidden bg-erb-gray-300 flex-shrink-0">
                  <img 
                    src="/founder.jpg" 
                    alt="Riley Eusden" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-erb-navy mb-1">{t('founderName')}</h2>
                  <p className="text-sm text-erb-gray-500 mb-3">{t('founder')}</p>
                  <p className="text-sm text-erb-gray-600">{t('experience')}</p>
                  <div className="mt-3 flex gap-3">
                    <a 
                      href="https://www.linkedin.com/in/riley-eusden-36614b83/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-erb-vermilion hover:text-erb-navy transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  </div>
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