'use client'

import { useTranslations } from 'next-intl'
import Link from 'next/link'
import Image from 'next/image'

export default function Hero({ locale }: { locale: string }) {
  const t = useTranslations('hero')

  return (
    <section className="relative bg-gradient-to-b from-white via-erb-gray-50/30 to-white py-24 overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-erb-navy">
              <span className="bg-gradient-to-r from-erb-navy to-erb-navy/80 bg-clip-text text-transparent">
                {t('headline')}
              </span>
            </h1>
            <p className="text-lg text-erb-gray-500">
              {t('subheadline')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href={`/${locale}/contact`} className="btn-primary">
                {t('cta')}
              </Link>
              <Link href={`/${locale}/services`} className="btn-secondary">
                {locale === 'ja' ? 'サービス詳細' : 'View Services'}
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-2xl shadow-2xl overflow-hidden bg-white border border-erb-gray-100">
              <Image
                src="/founder.jpg"
                alt="Riley Eusden - English Repair"
                width={600}
                height={600}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-erb-vermilion rounded-full opacity-10"></div>
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-erb-navy rounded-full opacity-5"></div>
          </div>
        </div>
      </div>
    </section>
  )
}