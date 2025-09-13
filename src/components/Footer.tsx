'use client'

import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Footer() {
  const t = useTranslations('footer')
  const currentYear = new Date().getFullYear()
  const pathname = usePathname()
  const locale = pathname.split('/')[1] || 'ja'

  return (
    <footer className="bg-erb-navy text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-2">{t('company')}</h3>
            <p className="text-erb-gray-300 text-sm">{t('tagline')}</p>
            <div className="mt-4 space-y-2 text-sm text-erb-gray-300">
              <a href="mailto:info@englishrepair.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@englishrepair.com
              </a>
              {process.env.NEXT_PUBLIC_PHONE && (
                <a href={`tel:${process.env.NEXT_PUBLIC_PHONE}`} className="flex items-center gap-2 hover:text-white transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {process.env.NEXT_PUBLIC_PHONE}
                </a>
              )}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-2">{t('quickLinks')}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href={`/${locale}/privacy`} className="text-erb-gray-300 hover:text-white transition-colors">{t('privacy')}</Link></li>
              <li><Link href={`/${locale}/legal`} className="text-erb-gray-300 hover:text-white transition-colors">{t('legal')}</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-2">{t('businessInfo')}</h3>
            <div className="text-sm text-erb-gray-300">
              {process.env.NEXT_PUBLIC_INVOICE_ID && (
                <p className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  {process.env.NEXT_PUBLIC_INVOICE_ID}
                </p>
              )}
              <p className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                東京都[区][住所]
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-erb-gray-500 mt-8 pt-8 text-center text-sm text-erb-gray-300">
          <p>{t('copyright', {year: currentYear})}</p>
        </div>
      </div>
    </footer>
  )
}