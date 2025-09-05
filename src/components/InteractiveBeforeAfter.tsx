'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useTranslations } from 'next-intl'
import * as Tabs from '@radix-ui/react-tabs'
import { Code, FileText, Globe, ArrowRight, Download, CheckCircle, XCircle, Megaphone } from 'lucide-react'

export default function InteractiveBeforeAfter({ locale }: { locale: string }) {
  const t = useTranslations('results.beforeAfter')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [activeTab, setActiveTab] = useState('example1')
  
  const isJapanese = locale === 'ja'

  const examples = [
    {
      id: 'example1',
      category: isJapanese ? 'Web コンテンツ' : 'Web Content',
      icon: Globe,
      before: {
        title: isJapanese ? '改善前' : 'Before',
        content: "Our company is engaged in manufacturing of semiconductor equipment. We have unique technology and provide high-quality products.",
        issues: [
          isJapanese ? '曖昧な表現' : 'Vague expressions',
          isJapanese ? '具体性の欠如' : 'Lack of specificity',
          isJapanese ? '差別化不明瞭' : 'Unclear differentiation'
        ]
      },
      after: {
        title: isJapanese ? '改善後' : 'After',
        content: "We develop advanced lithography systems for semiconductor manufacturing, with improved throughput and reduced defect rates compared to conventional systems.",
        improvements: [
          isJapanese ? '具体的な説明' : 'Specific description',
          isJapanese ? '技術的優位性' : 'Technical advantages',
          isJapanese ? '明確な価値提案' : 'Clear value proposition'
        ]
      }
    },
    {
      id: 'example2',
      category: isJapanese ? '技術仕様書' : 'Technical Specs',
      icon: FileText,
      before: {
        title: isJapanese ? '改善前' : 'Before',
        content: "The measurement accuracy is very high and the device operates in various conditions. It has good reliability.",
        issues: [
          isJapanese ? '定量化不足' : 'Lack of quantification',
          isJapanese ? '曖昧な形容詞' : 'Ambiguous adjectives',
          isJapanese ? '技術詳細なし' : 'No technical details'
        ]
      },
      after: {
        title: isJapanese ? '改善後' : 'After',
        content: "The system maintains ±0.001mm measurement accuracy across wide temperature ranges and delivers consistent performance with minimal drift over extended operation periods.",
        improvements: [
          isJapanese ? '精密な仕様' : 'Precise specifications',
          isJapanese ? '動作条件明記' : 'Clear operating conditions',
          isJapanese ? '信頼性の表現' : 'Reliability description'
        ]
      }
    },
    {
      id: 'example3',
      category: isJapanese ? 'プレスリリース' : 'Press Release',
      icon: Code,
      before: {
        title: isJapanese ? '改善前' : 'Before',
        content: "We are pleased to announce our new product. It has many innovative features and will contribute to customer success.",
        issues: [
          isJapanese ? '抽象的すぎる' : 'Too abstract',
          isJapanese ? 'ニュース性なし' : 'Lacks newsworthiness',
          isJapanese ? 'CTA不在' : 'No call-to-action'
        ]
      },
      after: {
        title: isJapanese ? '改善後' : 'After',
        content: "Tokyo—XYZ Corp introduces an AI-powered defect detection system that significantly reduces semiconductor inspection time while maintaining high accuracy levels. Available Q2 2024. Learn more at our website.",
        improvements: [
          isJapanese ? '具体的な利点' : 'Specific benefits',
          isJapanese ? '明確な時期' : 'Clear timeline',
          isJapanese ? '行動喚起' : 'Clear CTA'
        ]
      }
    },
    {
      id: 'example4',
      category: isJapanese ? 'マーケティング資料' : 'Marketing Materials',
      icon: Megaphone,
      before: {
        title: isJapanese ? '改善前' : 'Before',
        content: "Our solution is best in class and offers superior performance. Many customers are satisfied with our product.",
        issues: [
          isJapanese ? '根拠のない主張' : 'Unsupported claims',
          isJapanese ? '汎用的すぎる' : 'Too generic',
          isJapanese ? '証拠なし' : 'No evidence'
        ]
      },
      after: {
        title: isJapanese ? '改善後' : 'After',
        content: "Our solution delivers 40% faster processing speeds than industry standards, as verified by independent testing labs. Join 200+ manufacturers who have reduced defect rates by an average of 25%.",
        improvements: [
          isJapanese ? '数値による裏付け' : 'Quantified results',
          isJapanese ? '第三者検証' : 'Third-party validation',
          isJapanese ? '実績の明示' : 'Clear track record'
        ]
      }
    }
  ]

  const currentExample = examples.find(e => e.id === activeTab) || examples[0]

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-gray-50 to-blue-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-erb-navy mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-erb-gray-600 max-w-2xl mx-auto">
            {isJapanese 
              ? '実際の改善例をご覧ください。曖昧な表現が具体的で説得力のある英語に変わります。'
              : 'See real transformation examples. Watch vague expressions become specific, compelling English.'}
          </p>
        </motion.div>

        <Tabs.Root value={activeTab} onValueChange={setActiveTab}>
          {/* Tab List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Tabs.List className="flex flex-wrap justify-center gap-4 mb-12">
              {examples.map((example) => {
                const Icon = example.icon
                return (
                  <Tabs.Trigger
                    key={example.id}
                    value={example.id}
                    className={`
                      flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all
                      ${activeTab === example.id 
                        ? 'bg-erb-vermilion text-white shadow-lg scale-105' 
                        : 'bg-white text-erb-gray-600 border border-erb-gray-200 hover:border-erb-vermilion/30 hover:shadow-md'
                      }
                    `}
                  >
                    <Icon className="w-5 h-5" />
                    {example.category}
                  </Tabs.Trigger>
                )
              })}
            </Tabs.List>
          </motion.div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {/* Before Card */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative h-full"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-red-100 to-red-50 rounded-2xl blur-xl opacity-50" />
                  <div className="relative bg-white rounded-2xl border-2 border-red-200 p-8 shadow-xl min-h-[500px] flex flex-col">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-2xl font-bold text-erb-navy flex items-center gap-2">
                        <XCircle className="w-6 h-6 text-red-500" />
                        {currentExample.before.title}
                      </h3>
                      <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">
                        {isJapanese ? '要改善' : 'Needs Work'}
                      </span>
                    </div>
                    
                    <div className="bg-red-50 rounded-lg p-6 mb-6 font-mono text-sm leading-relaxed text-erb-gray-700 border border-red-100">
                      {currentExample.before.content}
                    </div>
                    
                    <div className="space-y-2 mt-auto">
                      <p className="text-sm font-medium text-erb-gray-500 mb-2">
                        {isJapanese ? '問題点:' : 'Issues:'}
                      </p>
                      {currentExample.before.issues.map((issue, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 + index * 0.1 }}
                          className="flex items-center gap-2 text-sm text-red-600"
                        >
                          <div className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                          {issue}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* After Card */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative h-full"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-green-50 rounded-2xl blur-xl opacity-50" />
                  <div className="relative bg-white rounded-2xl border-2 border-green-200 p-8 shadow-xl min-h-[500px] flex flex-col">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-2xl font-bold text-erb-navy flex items-center gap-2">
                        <CheckCircle className="w-6 h-6 text-green-500" />
                        {currentExample.after.title}
                      </h3>
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                        {isJapanese ? '改善済' : 'Optimized'}
                      </span>
                    </div>
                    
                    <div className="bg-green-50 rounded-lg p-6 mb-6 font-mono text-sm leading-relaxed text-erb-gray-700 border border-green-100">
                      {currentExample.after.content}
                    </div>
                    
                    <div className="space-y-2 mt-auto">
                      <p className="text-sm font-medium text-erb-gray-500 mb-2">
                        {isJapanese ? '改善点:' : 'Improvements:'}
                      </p>
                      {currentExample.after.improvements.map((improvement, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 + index * 0.1 }}
                          className="flex items-center gap-2 text-sm text-green-600"
                        >
                          <CheckCircle className="w-3 h-3 text-green-500" />
                          {improvement}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>

            </motion.div>
          </AnimatePresence>
        </Tabs.Root>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-erb-gray-600 mb-6">
            {isJapanese 
              ? 'あなたのコンテンツも、このように生まれ変わります'
              : 'Your content can be transformed just like this'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href={`/${locale}/contact`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-erb-vermilion to-red-600 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              {isJapanese ? '無料サンプルを依頼' : 'Request Free Sample'}
              <ArrowRight className="w-5 h-5" />
            </motion.a>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-erb-gray-700 font-medium rounded-xl border-2 border-erb-gray-300 hover:border-erb-gray-400 hover:text-erb-navy transition-all"
            >
              <Download className="w-5 h-5" />
              {isJapanese ? 'ガイドをダウンロード' : 'Download Guide'}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}