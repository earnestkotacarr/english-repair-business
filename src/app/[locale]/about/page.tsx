'use client'

import { useTranslations } from 'next-intl'
import Image from 'next/image'

export default function AboutPage() {
  const t = useTranslations('about')

  const teamMembers = [
    {
      name: t('founderName'),
      role: t('founder'),
      experience: t('founderExperience'),
      education: t('founderEducation'),
      bio: t('founderBio'),
      image: '/riley-new.jpg',
      fallbackImage: '/founder.jpg',
      linkedin: 'https://www.linkedin.com/in/riley-eusden-36614b83/'
    },
    {
      name: t('colleagueName'),
      role: t('colleague'),
      experience: t('colleagueExperience'),
      education: t('colleagueEducation'),
      bio: t('colleagueBio'),
      image: '/Earnest Kota Carr.jpg',
      fallbackImage: '/Earnest Kota Carr.jpg',
      linkedin: 'https://www.linkedin.com/in/earnest-k-carr-a4362b150/'
    }
  ]

  return (
    <div className="py-16 bg-gradient-to-b from-white to-erb-blue-50">
      {/* Tech background image */}
      <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden">
        <Image
          src="/images/tech-hero.jpg"
          alt="Technology background"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      <div className="container relative">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-erb-navy text-center">{t('title')}</h1>
          <p className="text-lg text-erb-gray-600 mb-12 text-center max-w-3xl mx-auto">{t('intro')}</p>
          
          {/* Team Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-8 text-erb-navy text-center">{t('teamTitle')}</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all">
                  {/* Profile Image */}
                  <div className="flex justify-center mb-6">
                    <div className="w-32 h-32 rounded-full overflow-hidden bg-gradient-to-br from-erb-blue-100 to-erb-blue-200 shadow-lg">
                      {member.image ? (
                        <img 
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement
                            if (member.fallbackImage && member.image !== member.fallbackImage) {
                              target.src = member.fallbackImage
                            }
                          }}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <span className="text-3xl font-bold text-erb-blue-600">
                            {member.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Profile Info */}
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-erb-navy mb-1">{member.name}</h3>
                    <p className="text-erb-blue-500 font-medium mb-3">{member.role}</p>
                    
                    <div className="space-y-2 mb-4">
                      <p className="text-sm text-erb-gray-600">{member.experience}</p>
                      <p className="text-sm font-medium text-erb-navy">{member.education}</p>
                    </div>
                    
                    <p className="text-erb-gray-600 leading-relaxed mb-4">{member.bio}</p>
                    
                    {member.linkedin && (
                      <a 
                        href={member.linkedin}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-erb-blue-500 hover:text-erb-blue-600 transition-colors"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                        <span className="text-sm">LinkedIn Profile</span>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Collaborative Approach */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-erb-blue-100 flex items-center justify-center">
                  <svg className="w-6 h-6 text-erb-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-erb-navy mb-3">Our Collaborative Approach</h3>
                <p className="text-erb-gray-600 leading-relaxed">{t('approach')}</p>
              </div>
            </div>
          </div>
          
          {/* Visual Enhancement - Tech Images */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { src: '/images/semiconductor.jpg', alt: 'Semiconductor technology' },
              { src: '/images/manufacturing.jpg', alt: 'Manufacturing excellence' },
              { src: '/images/collaboration.jpg', alt: 'Team collaboration' },
              { src: '/images/quality-process.jpg', alt: 'Quality process' }
            ].map((image, index) => (
              <div key={index} className="relative h-32 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-erb-navy/50 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}