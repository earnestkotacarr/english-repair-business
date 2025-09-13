'use client'

import { useTranslations } from 'next-intl'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'
import { ArrowRight, CheckCircle } from 'lucide-react'

export default function AnimatedHero({ locale }: { locale: string }) {
  const t = useTranslations('hero')
  const [mounted, setMounted] = useState(false)
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, 50])
  const y2 = useTransform(scrollY, [0, 300], [0, -50])
  const opacity = useTransform(scrollY, [200, 500], [1, 0.3])

  useEffect(() => {
    setMounted(true)
  }, [])


  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-erb-blue-50 via-white to-erb-blue-50 py-8 lg:py-16">
      {/* Tech background image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/tech-hero.jpg" 
          alt="" 
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          style={{ y: y1 }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-erb-blue-400/10 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-erb-navy/10 to-transparent rounded-full blur-3xl"
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        {/* Floating Particles */}
        {mounted && [...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-erb-blue-400/20 rounded-full"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
          />
        ))}
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ opacity }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-erb-blue-500/10 text-erb-blue-600 rounded-full text-sm font-medium"
            >
              <CheckCircle className="w-4 h-4" />
              {t('badge')}
            </motion.div>

            {/* Main Headline with Typed Effect */}
            <div>
              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-erb-navy"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <span className="block">
                  {/* Mobile headline */}
                  <span className="block sm:hidden">
                    <span className="block text-3xl text-black font-bold">{t('headlinePart1')}</span>
                    <span className="block text-lg mt-2 text-erb-gray-700">{t('headlinePart2')}</span>
                  </span>
                  {/* Desktop headline */}
                  <span className="hidden sm:block text-5xl lg:text-5xl xl:text-6xl text-black font-bold">{t('headlinePart1')}</span>
                  <span className="hidden sm:block text-xl sm:text-2xl lg:text-2xl xl:text-3xl mt-2 text-erb-gray-700">
                    {t('headlinePart2')}
                  </span>
                </span>
              </motion.h1>
              
              <motion.p
                className="mt-6 text-erb-gray-600 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                {/* Mobile subheadline */}
                <span className="block sm:hidden text-base">{t('subheadline_mobile')}</span>
                {/* Desktop subheadline */}
                <span className="hidden sm:block text-lg lg:text-xl">{t('subheadline')}</span>
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 pb-8 lg:pb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <Link href={`/${locale}/contact`}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-8 py-4 bg-gradient-to-r from-erb-primary to-erb-blue-600 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center gap-3"
                >
                  {t('cta')}
                </motion.button>
              </Link>
              
              <Link href={`/${locale}/services`}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-erb-blue-500 text-white font-medium rounded-xl shadow-md hover:shadow-lg hover:bg-erb-blue-600 transition-all"
                >
                  {t('viewServices')}
                </motion.button>
              </Link>
            </motion.div>

          </motion.div>

          {/* Image with Animations */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-erb-gray-100">
                <div className="aspect-square bg-white">
                  <Image
                    src="/founder.jpg"
                    alt={t('altFounderImage')}
                    width={600}
                    height={600}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
              
              {/* Decorative Elements */}
              <motion.div
                className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-erb-blue-500 to-erb-blue-600 rounded-2xl opacity-20"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 90, 0],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-erb-navy to-blue-900 rounded-2xl opacity-20"
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [0, -90, 0],
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
            </div>
            
            {/* Professional Caption */}
            <div className="mt-6 mb-8 lg:mb-12 text-center">
              <p className="text-sm lg:text-base font-medium text-erb-navy">
                {t('captionTitle')}
              </p>
              <p className="text-xs lg:text-sm text-erb-gray-600 mt-1 mb-4 lg:mb-8">
                {t('captionSubtitle')}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}