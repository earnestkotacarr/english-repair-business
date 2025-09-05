'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Quote, Building2, Award, Shield, TrendingUp } from 'lucide-react'
import { useTranslations } from 'next-intl'

export default function SocialProof({ locale }: { locale: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  
  const isJapanese = locale === 'ja'

  const testimonials = [
    {
      quote: isJapanese 
        ? "English Repairのおかげで、海外からの問い合わせが3倍に増えました。技術用語の統一と構造改善により、製品の優位性が明確に伝わるようになりました。"
        : "Thanks to English Repair, our overseas inquiries tripled. The unified terminology and improved structure clearly convey our product advantages.",
      author: isJapanese ? "田中 太郎" : "Taro Tanaka",
      role: isJapanese ? "海外営業部長" : "International Sales Director",
      company: isJapanese ? "〇〇半導体株式会社" : "XX Semiconductor Co., Ltd.",
    },
    {
      quote: isJapanese
        ? "曖昧な表現が具体的な数値と競合優位性に置き換わり、展示会でのリード獲得が40%向上しました。投資対効果は期待以上です。"
        : "Vague expressions were replaced with specific metrics and competitive advantages, improving trade show leads by 40%. ROI exceeded expectations.",
      author: isJapanese ? "佐藤 花子" : "Hanako Sato",
      role: isJapanese ? "マーケティング課長" : "Marketing Manager",
      company: isJapanese ? "△△精密機器" : "YY Precision Instruments",
    },
    {
      quote: isJapanese
        ? "技術文書の英語化で長年苦労していましたが、English Repairは正確性を保ちながら読みやすい英語に変換してくれました。社内でも好評です。"
        : "We struggled with technical document translation for years. English Repair transformed them into readable English while maintaining accuracy. Great internal feedback.",
      author: isJapanese ? "山田 次郎" : "Jiro Yamada",
      role: isJapanese ? "技術部門責任者" : "Technical Department Head",
      company: isJapanese ? "□□メディカル" : "ZZ Medical",
    }
  ]

  const clientLogos = [
    { name: 'Client 1', industry: isJapanese ? '半導体' : 'Semiconductor' },
    { name: 'Client 2', industry: isJapanese ? '精密機械' : 'Precision' },
    { name: 'Client 3', industry: isJapanese ? '医療機器' : 'Medical' },
    { name: 'Client 4', industry: isJapanese ? 'FA/ロボット' : 'FA/Robot' },
    { name: 'Client 5', industry: isJapanese ? '計測器' : 'Measurement' },
    { name: 'Client 6', industry: isJapanese ? '材料化学' : 'Materials' },
  ]

  const trustBadges = [
    { icon: Shield, label: isJapanese ? 'NDA標準' : 'NDA Standard' },
    { icon: TrendingUp, label: isJapanese ? '成果重視' : 'Results Focused' },
  ]

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-white to-erb-gray-50 overflow-hidden">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-erb-navy mb-4">
            {isJapanese ? '信頼と実績' : 'Trust & Results'}
          </h2>
          <p className="text-lg text-erb-gray-600 max-w-2xl mx-auto">
            {isJapanese 
              ? '日本を代表する技術企業から選ばれ続けている理由'
              : 'Why leading Japanese tech companies choose us'}
          </p>
        </motion.div>

        {/* Client Logos Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-center text-sm text-erb-gray-500 mb-8 uppercase tracking-wider">
            {isJapanese ? '導入企業例' : 'Trusted By'}
          </p>
          
          <div className="relative py-6">
            <div className="flex overflow-hidden">
              <motion.div
                className="flex gap-12 items-center"
                animate={{
                  x: [0, -1920],
                }}
                transition={{
                  x: {
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
              >
                {[...clientLogos, ...clientLogos, ...clientLogos].map((logo, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-40 h-20 bg-white rounded-lg shadow-md border border-erb-gray-100 flex flex-col items-center justify-center hover:shadow-lg transition-shadow"
                  >
                    <div className="w-20 h-8 bg-erb-gray-200 rounded mb-2" />
                    <span className="text-xs text-erb-gray-500">{logo.industry}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex justify-center gap-8 mb-20"
        >
          {trustBadges.map((badge, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-erb-gray-600"
            >
              <badge.icon className="w-5 h-5" />
              <span className="text-sm font-medium">{badge.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white rounded-xl pt-4 pb-6 px-8 shadow-lg border border-erb-gray-100 relative"
            >
              <Quote className="absolute top-4 right-6 w-6 h-6 text-erb-vermilion/20" />
              
              
              {/* Quote */}
              <p className="text-erb-gray-600 mb-6 leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              
              {/* Author */}
              <div className="border-t border-erb-gray-100 pt-4">
                <p className="font-semibold text-erb-navy">{testimonial.author}</p>
                <p className="text-sm text-erb-gray-500">{testimonial.role}</p>
                <p className="text-sm text-erb-gray-400">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-erb-gray-600 mb-6">
            {isJapanese 
              ? 'あなたの会社も成功事例の一つになりませんか？'
              : 'Ready to become our next success story?'}
          </p>
          <motion.a
            href={`/${locale}/contact`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-erb-vermilion to-red-600 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all"
          >
            {isJapanese ? '無料相談を予約' : 'Schedule Free Consultation'}
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}