'use client'

import { useTranslations } from 'next-intl'
import Link from 'next/link'

export default function ServicesPage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations('services')

  const services = [
    {
      id: 'web',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      title: t('web.title'),
      description: t('web.description'),
      price: t('web.price'),
      timeline: t('web.timeline'),
      includes: t('web.includes'),
      highlight: true
    },
    {
      id: 'audit',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      title: t('audit.title'),
      description: t('audit.description'),
      price: t('audit.price'),
      timeline: t('audit.timeline'),
      includes: t('audit.includes')
    },
    {
      id: 'qa',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: t('qa.title'),
      description: t('qa.description'),
      price: t('qa.price'),
      timeline: t('qa.timeline'),
      includes: t('qa.includes')
    },
    {
      id: 'media',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
      ),
      title: t('media.title'),
      description: t('media.description'),
      price: t('media.price'),
      timeline: t('media.timeline'),
      includes: t('media.includes')
    }
  ]

  return (
    <div className="py-16 bg-erb-gray-50">
      <div className="container">
        <h1 className="text-4xl font-bold text-center mb-12 text-erb-navy">{t('title')}</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service) => (
            <div 
              key={service.id}
              className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-erb-gray-100"
            >
              <div className="text-erb-vermilion mb-6">{service.icon}</div>
              <h2 className="text-2xl font-bold mb-3 text-erb-navy">{service.title}</h2>
              <p className="text-erb-gray-500 mb-4">{service.description}</p>
              
              <div className="space-y-3 mb-6">
                <div className="grid grid-cols-[80px,1fr] gap-2 items-start">
                  <span className="text-sm font-medium text-erb-navy">Price:</span>
                  <span className="text-sm text-erb-vermilion font-medium">{service.price}</span>
                </div>
                <div className="grid grid-cols-[80px,1fr] gap-2 items-start">
                  <span className="text-sm font-medium text-erb-navy">Timeline:</span>
                  <span className="text-sm text-erb-gray-500">{service.timeline}</span>
                </div>
                <div className="grid grid-cols-[80px,1fr] gap-2 items-start">
                  <span className="text-sm font-medium text-erb-navy">Includes:</span>
                  <span className="text-sm text-erb-gray-500">{service.includes}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Single CTA button */}
        <div className="text-center mt-12">
          <Link 
            href={`/${locale}/contact`}
            className="inline-block px-8 py-4 bg-gradient-to-r from-erb-vermilion to-red-600 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all"
          >
            {locale === 'ja' ? '無料相談を予約する' : 'Get Started with Free Consultation'}
          </Link>
        </div>
      </div>
    </div>
  )
}