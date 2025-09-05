'use client'

import { useTranslations } from 'next-intl'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Target, BookOpen, ClipboardCheck, Sparkles } from 'lucide-react'

export default function AnimatedValueCards() {
  const t = useTranslations('values')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const values = [
    {
      icon: Target,
      title: t('item1.title'),
      description: t('item1.description'),
      gradient: 'from-blue-500 to-cyan-500',
      delay: 0
    },
    {
      icon: BookOpen,
      title: t('item2.title'),
      description: t('item2.description'),
      gradient: 'from-erb-vermilion to-red-600',
      delay: 0.1
    },
    {
      icon: ClipboardCheck,
      title: t('item3.title'),
      description: t('item3.description'),
      gradient: 'from-emerald-500 to-teal-500',
      delay: 0.2
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
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-white to-erb-gray-50/50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(220,38,38,0.03)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(15,23,42,0.03)_0%,transparent_50%)]" />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-erb-vermilion/10 to-erb-vermilion/5 rounded-full mb-4"
          >
            <Sparkles className="w-8 h-8 text-erb-vermilion" />
          </motion.div>
          
          <h2 className="text-4xl font-bold text-erb-navy mb-4">{t('title')}</h2>
          
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-erb-vermilion to-red-600 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <motion.div
                key={index}
                variants={item}
                transition={{ 
                  duration: 0.5,
                  delay: value.delay,
                  type: "spring",
                  stiffness: 100
                }}
              >
                <motion.div
                  whileHover={{ 
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                  className="group relative h-full"
                >
                  {/* Card Background with Gradient Border */}
                  <div className="absolute inset-0 bg-gradient-to-br from-erb-vermilion/5 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                  
                  <div className="relative h-full bg-white rounded-2xl border border-erb-gray-100 p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
                    {/* Animated Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-erb-vermilion/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Icon Container */}
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                      className="relative inline-block mb-6"
                    >
                      <div className={`w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-xl flex items-center justify-center shadow-lg`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      
                      {/* Floating Dot */}
                      <motion.div
                        className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full"
                        animate={{
                          scale: [1, 1.2, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    </motion.div>
                    
                    {/* Content */}
                    <h3 className="text-xl font-semibold mb-3 text-erb-navy group-hover:text-erb-vermilion transition-colors duration-300">
                      {value.title}
                    </h3>
                    
                    <p className="text-erb-gray-500 leading-relaxed">
                      {value.description}
                    </p>
                    
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}