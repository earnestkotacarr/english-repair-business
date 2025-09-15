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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div>
            <h3 className="text-lg font-bold mb-4">{t('company')}</h3>
            <div className="space-y-2 text-sm text-erb-gray-300">
              <a href="mailto:info@englishrepair.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@englishrepair.com
              </a>
              <a href="tel:+81-80-1243-1830" className="flex items-center gap-2 hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +81 080-1243-1830
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-2">{t('quickLinks')}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href={`/${locale}/privacy`} className="text-erb-gray-300 hover:text-white transition-colors">{t('privacy')}</Link></li>
              <li><Link href={`/${locale}/legal`} className="text-erb-gray-300 hover:text-white transition-colors">{t('legal')}</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-erb-gray-500 mt-8 pt-8 text-center text-sm text-erb-gray-300">
          <p>{t('copyright', {year: currentYear})}</p>
        </div>
      </div>
    </footer>
  )
}