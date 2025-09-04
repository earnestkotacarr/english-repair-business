'use client'

import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import LocaleSwitcher from './LocaleSwitcher'
import ENRLogo from './ENRLogo'

export default function Header({ locale }: { locale: string }) {
  const t = useTranslations('nav')
  const pathname = usePathname()

  const navItems = [
    { href: `/${locale}`, label: t('home') },
    { href: `/${locale}/services`, label: t('services') },
    { href: `/${locale}/process`, label: t('process') },
    // { href: `/${locale}/results`, label: t('results') }, // Hidden for now
    { href: `/${locale}/about`, label: t('about') },
    { href: `/${locale}/contact`, label: t('contact') },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-erb-gray-100">
      <div className="container">
        <div className="flex items-center justify-between h-20">
          <Link href={`/${locale}`} className="flex items-center">
            <ENRLogo className="h-10" />
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-all hover:text-erb-vermilion relative ${
                  pathname === item.href ? 'text-erb-vermilion' : 'text-erb-navy'
                } after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-erb-vermilion after:transform after:origin-left after:transition-transform ${
                  pathname === item.href ? 'after:scale-x-100' : 'after:scale-x-0 hover:after:scale-x-100'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <LocaleSwitcher locale={locale} />
            <button className="md:hidden p-2">
              <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}