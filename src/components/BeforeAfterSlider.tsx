'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { ArrowRight } from 'lucide-react'

export default function BeforeAfterSlider() {
  const t = useTranslations('results.beforeAfter')
  const [showAfter, setShowAfter] = useState(false)

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
      <h3 className="text-2xl font-bold mb-6 text-erb-navy text-center">{t('title')}</h3>
      
      <div className="flex justify-center space-x-2 mb-8">
        <button
          onClick={() => setShowAfter(false)}
          className={`px-6 py-3 rounded-lg font-medium transition-all ${
            !showAfter 
              ? 'bg-gradient-to-r from-erb-gray-400 to-erb-gray-500 text-white shadow-lg transform scale-105' 
              : 'bg-erb-gray-100 text-erb-gray-500 hover:bg-erb-gray-200'
          }`}
        >
          Before
        </button>
        
        <div className="flex items-center px-3">
          <ArrowRight className="w-6 h-6 text-erb-gray-400" />
        </div>
        
        <button
          onClick={() => setShowAfter(true)}
          className={`px-6 py-3 rounded-lg font-medium transition-all ${
            showAfter 
              ? 'bg-gradient-to-r from-erb-blue-500 to-erb-blue-600 text-white shadow-lg transform scale-105' 
              : 'bg-erb-gray-100 text-erb-gray-500 hover:bg-erb-gray-200'
          }`}
        >
          After
        </button>
      </div>

      <div className="relative overflow-hidden">
        <div className="min-h-[180px]">
          {/* Before */}
          <div 
            className={`transition-all duration-500 ${
              showAfter ? 'opacity-0 transform -translate-x-8' : 'opacity-100 translate-x-0'
            }`}
          >
            {!showAfter && (
              <div className="bg-gradient-to-r from-erb-gray-50 to-erb-gray-100 p-6 rounded-xl border-l-4 border-erb-gray-400">
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 bg-erb-gray-400 text-white text-xs font-medium rounded">
                    Original
                  </span>
                </div>
                <p className="text-lg text-erb-gray-700 leading-relaxed mb-4 font-mono">
                  {t('before')}
                </p>
                <div className="mt-4 text-sm text-erb-gray-500 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-red-500">✗</span>
                    <span>Awkward phrasing: &quot;it is 3 times better&quot;</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-red-500">✗</span>
                    <span>Poor sentence structure</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-500">△</span>
                    <span>Technical data present but poorly presented</span>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* After */}
          <div 
            className={`absolute top-0 left-0 w-full transition-all duration-500 ${
              showAfter ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            {showAfter && (
              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl border-l-4 border-green-500">
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 bg-gradient-to-r from-erb-blue-500 to-erb-blue-600 text-white text-xs font-medium rounded">
                    Refined
                  </span>
                </div>
                <p className="text-lg text-erb-navy leading-relaxed mb-4 font-medium">
                  {t('after')}
                </p>
                <div className="mt-4 text-sm text-erb-gray-600 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Professional terminology and tone</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Clear, impactful sentence structure</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Same technical data, better presentation</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-sm text-erb-gray-600 italic">{t('note')}</p>
      </div>
    </div>
  )
}