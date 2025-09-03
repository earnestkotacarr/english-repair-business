'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'

export default function BeforeAfterSlider() {
  const t = useTranslations('results.beforeAfter')
  const [showAfter, setShowAfter] = useState(false)

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
      <h3 className="text-xl font-bold mb-4 text-erb-navy">{t('title')}</h3>
      
      <div className="flex space-x-2 mb-4">
        <button
          onClick={() => setShowAfter(false)}
          className={`px-4 py-2 rounded font-medium transition-colors ${
            !showAfter 
              ? 'bg-erb-vermilion text-white' 
              : 'bg-erb-gray-100 text-erb-gray-500 hover:bg-erb-gray-200'
          }`}
        >
          Before
        </button>
        <button
          onClick={() => setShowAfter(true)}
          className={`px-4 py-2 rounded font-medium transition-colors ${
            showAfter 
              ? 'bg-erb-vermilion text-white' 
              : 'bg-erb-gray-100 text-erb-gray-500 hover:bg-erb-gray-200'
          }`}
        >
          After
        </button>
      </div>

      <div className="relative overflow-hidden min-h-[120px]">
        <div 
          className={`transition-transform duration-300 ${
            showAfter ? '-translate-x-full' : 'translate-x-0'
          }`}
        >
          <div className="bg-erb-gray-50 p-4 rounded border-l-4 border-erb-gray-400">
            <p className="text-sm text-erb-gray-600 italic">{t('before')}</p>
          </div>
        </div>
        
        <div 
          className={`absolute top-0 left-0 w-full transition-transform duration-300 ${
            showAfter ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="bg-green-50 p-4 rounded border-l-4 border-green-500">
            <p className="text-sm text-erb-navy">{t('after')}</p>
          </div>
        </div>
      </div>

      <div className="mt-4 p-3 bg-blue-50 rounded">
        <p className="text-xs text-erb-navy">
          <strong>Note:</strong> {t('note')}
        </p>
      </div>
    </div>
  )
}