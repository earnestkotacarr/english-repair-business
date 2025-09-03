'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useTransition } from 'react'

export default function LocaleSwitcher({ locale }: { locale: string }) {
  const pathname = usePathname()
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  const switchLocale = () => {
    const newLocale = locale === 'ja' ? 'en' : 'ja'
    
    // Get the current path without the locale
    const segments = pathname.split('/')
    segments[1] = newLocale
    const newPath = segments.join('/') || `/${newLocale}`
    
    startTransition(() => {
      router.replace(newPath)
    })
  }

  return (
    <button
      onClick={switchLocale}
      disabled={isPending}
      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-erb-navy border border-erb-gray-200 rounded-lg hover:bg-erb-gray-50 hover:border-erb-navy/20 transition-all disabled:opacity-50"
    >
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
      </svg>
      {locale === 'ja' ? 'English' : '日本語'}
    </button>
  )
}