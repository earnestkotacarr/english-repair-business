'use client'

import { useTranslations } from 'next-intl'
import { useState } from 'react'

export default function ContactPage() {
  const t = useTranslations('contact')
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    phone: '',
    url: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Form submission placeholder - integrate with your preferred service')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="py-16 bg-erb-gray-50">
      <div className="container">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-4 text-erb-navy">{t('title')}</h1>
          <p className="text-center text-lg text-erb-gray-500 mb-12">{t('cta')}</p>
          
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-erb-navy mb-2">
                  {t('form.company')}
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-erb-gray-300 rounded-md focus:ring-2 focus:ring-erb-vermilion focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-erb-navy mb-2">
                  {t('form.name')}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-erb-gray-300 rounded-md focus:ring-2 focus:ring-erb-vermilion focus:border-transparent"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-erb-navy mb-2">
                  {t('form.email')}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-erb-gray-300 rounded-md focus:ring-2 focus:ring-erb-vermilion focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-erb-navy mb-2">
                  {t('form.phone')}
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-erb-gray-300 rounded-md focus:ring-2 focus:ring-erb-vermilion focus:border-transparent"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-erb-navy mb-2">
                {t('form.url')}
              </label>
              <input
                type="text"
                name="url"
                value={formData.url}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-erb-gray-300 rounded-md focus:ring-2 focus:ring-erb-vermilion focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-erb-navy mb-2">
                {t('form.message')}
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                required
                className="w-full px-4 py-2 border border-erb-gray-300 rounded-md focus:ring-2 focus:ring-erb-vermilion focus:border-transparent"
              />
            </div>
            
            <button
              type="submit"
              className="w-full py-3 px-6 bg-erb-vermilion text-white font-medium rounded-md hover:bg-opacity-90 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              {t('form.submit')}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}