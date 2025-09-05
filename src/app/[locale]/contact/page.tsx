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
  const [files, setFiles] = useState<File[]>([])
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate form
    const newErrors: Record<string, string> = {}
    if (!formData.company) newErrors.company = 'Company name is required'
    if (!formData.name) newErrors.name = 'Name is required'
    if (!formData.email) newErrors.email = 'Email is required'
    if (formData.email && !formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      newErrors.email = 'Invalid email format'
    }
    if (formData.url && !formData.url.match(/^(https?:\/\/)?[\w.-]+(\.[\w.-]+)+/)) {
      newErrors.url = 'Invalid URL format'
    }
    if (!formData.message) newErrors.message = 'Message is required'
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    
    console.log('Form submitted:', formData, 'Files:', files)
    alert('Form submission placeholder - integrate with your preferred service')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors(prev => ({ ...prev, [e.target.name]: '' }))
    }
  }
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files))
    }
  }
  
  const handleFileDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.dataTransfer.files) {
      setFiles(Array.from(e.dataTransfer.files))
    }
  }
  
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
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
                  className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-erb-vermilion focus:border-transparent ${
                    errors.company ? 'border-red-500' : 'border-erb-gray-300'
                  }`}
                />
                {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company}</p>}
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
                  className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-erb-vermilion focus:border-transparent ${
                    errors.name ? 'border-red-500' : 'border-erb-gray-300'
                  }`}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
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
                  className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-erb-vermilion focus:border-transparent ${
                    errors.email ? 'border-red-500' : 'border-erb-gray-300'
                  }`}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
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
                {t('form.url')} (Optional)
              </label>
              <input
                type="url"
                name="url"
                value={formData.url}
                onChange={handleChange}
                placeholder="https://example.com"
                className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-erb-vermilion focus:border-transparent ${
                  errors.url ? 'border-red-500' : 'border-erb-gray-300'
                }`}
              />
              {errors.url && <p className="text-red-500 text-sm mt-1">{errors.url}</p>}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-erb-navy mb-2">
                Upload Documents (Optional)
              </label>
              <div
                onDrop={handleFileDrop}
                onDragOver={handleDragOver}
                className="border-2 border-dashed border-erb-gray-300 rounded-lg p-8 text-center hover:border-erb-vermilion transition-colors"
              >
                <input
                  type="file"
                  id="file-upload"
                  multiple
                  accept=".pdf,.doc,.docx,.txt"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <label htmlFor="file-upload" className="cursor-pointer">
                  <svg className="mx-auto h-12 w-12 text-erb-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  <p className="mt-2 text-sm text-erb-gray-600">
                    <span className="font-medium text-erb-vermilion hover:text-erb-vermilion/80">Click to upload</span> or drag and drop
                  </p>
                  <p className="text-xs text-erb-gray-500 mt-1">PDF, DOC, DOCX up to 10MB</p>
                </label>
                {files.length > 0 && (
                  <div className="mt-4 text-sm text-left">
                    <p className="font-medium text-erb-navy mb-2">Selected files:</p>
                    {files.map((file, index) => (
                      <p key={index} className="text-erb-gray-600">• {file.name}</p>
                    ))}
                  </div>
                )}
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-erb-navy mb-2">
                {t('form.message')} ({formData.message.length}/500)
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                maxLength={500}
                className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-erb-vermilion focus:border-transparent ${
                  errors.message ? 'border-red-500' : 'border-erb-gray-300'
                }`}
              />
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>
            
            <button
              type="submit"
              className="w-full py-3 px-6 bg-gradient-to-r from-erb-vermilion to-red-600 text-white font-medium rounded-xl hover:shadow-lg transition-all duration-200 shadow-md"
            >
              {t('form.submit')}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}