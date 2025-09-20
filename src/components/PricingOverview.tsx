'use client'

import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Globe, FileText, Clock, Newspaper, ArrowRight } from 'lucide-react'

export default function PricingOverview({ locale }: { locale: string }) {
  const t = useTranslations('pricing')
  const tServices = useTranslations('services')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const pricingItems = [
    {
      icon: Globe,
      title: tServices('web.title'),
      price: '¥10,000-20,000',
      unit: t('perPage'),
      includes: t('webIncludes'),
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: FileText,
      title: tServices('audit.title'),
      price: '¥30,000-100,000',
      unit: t('fullAudit'),
      includes: t('auditIncludes'),
      gradient: 'from-erb-primary to-erb-blue-600'
    },
    {
      icon: Clock,
      title: tServices('qa.title'),
      price: '¥100,000-300,000',
      unit: t('perMonth'),
      includes: t('monthlyIncludes'),
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      icon: Newspaper,
      title: tServices('media.title'),
      price: '¥25,000-50,000',
      unit: t('perPage'),
      includes: t('mediaIncludes'),
      gradient: 'from-purple-500 to-pink-500'
    }
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-erb-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(59,130,246,0.03)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(220,38,38,0.03)_0%,transparent_50%)]" />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-erb-navy mb-4" style={{ wordBreak: locale === 'ja' ? 'keep-all' : 'normal', overflowWrap: 'break-word' }}>
            {t('title')}
          </h2>
          <p className="text-lg text-erb-gray-600" style={{ wordBreak: locale === 'ja' ? 'keep-all' : 'normal', overflowWrap: 'break-word' }}>
            {t('subtitle')}
          </p>

          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-erb-primary to-erb-blue-600 mx-auto rounded-full mt-4"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12"
        >
          {pricingItems.map((pricing, index) => {
            const Icon = pricing.icon
            return (
              <motion.div
                key={index}
                variants={item}
                transition={{
                  duration: 0.5,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                className="group relative"
              >
                <div className="relative h-full bg-white rounded-xl border border-erb-gray-200 p-6 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col">
                  {/* Gradient Accent */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${pricing.gradient} rounded-t-xl`} />

                  {/* Icon */}
                  <div className={`w-12 h-12 bg-gradient-to-br ${pricing.gradient} rounded-lg flex items-center justify-center mb-4 shadow-md`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-semibold text-erb-navy mb-2" style={{ wordBreak: locale === 'ja' ? 'keep-all' : 'normal', overflowWrap: 'break-word' }}>
                    {pricing.title}
                  </h3>

                  {/* Price */}
                  <div className="mb-3">
                    <p className="text-xl font-bold text-erb-primary">
                      {pricing.price}
                    </p>
                    <p className="text-xs text-erb-gray-500" style={{ wordBreak: locale === 'ja' ? 'keep-all' : 'normal', overflowWrap: 'break-word' }}>
                      {pricing.unit}
                    </p>
                  </div>

                  {/* Includes */}
                  <div className="border-t border-erb-gray-100 pt-3 mt-auto">
                    <p className="text-[11px] text-erb-gray-600 leading-relaxed" style={{ wordBreak: locale === 'ja' ? 'keep-all' : 'normal', overflowWrap: 'break-word' }}>
                      {pricing.includes}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center"
        >
          <Link href={`/${locale}/services`}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-erb-primary to-erb-blue-600 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              {t('viewFullServices')}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}