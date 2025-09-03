export default function PrivacyPage({ params: { locale } }: { params: { locale: string } }) {
  const content = locale === 'ja' ? {
    title: 'プライバシーポリシー',
    intro: 'English Repair Business（以下「当社」）は、お客様の個人情報保護を重要視し、以下のポリシーに従って適切に管理いたします。',
    sections: [
      {
        title: '1. 個人情報の収集',
        content: '当社は、サービス提供に必要な範囲で、お客様の会社名、氏名、メールアドレス、電話番号などを収集します。'
      },
      {
        title: '2. 個人情報の利用目的',
        content: '収集した個人情報は、サービスの提供、お問い合わせへの対応、サービス改善のためのみに使用します。'
      },
      {
        title: '3. 個人情報の第三者提供',
        content: '当社は、法令に基づく場合を除き、お客様の同意なく第三者に個人情報を提供することはありません。'
      },
      {
        title: '4. セキュリティ',
        content: '当社は、個人情報の紛失、破壊、改ざん、漏洩を防ぐため、適切なセキュリティ対策を実施します。'
      }
    ]
  } : {
    title: 'Privacy Policy',
    intro: 'English Repair Business ("we" or "our") values your privacy and manages personal information according to the following policy.',
    sections: [
      {
        title: '1. Information Collection',
        content: 'We collect company name, personal name, email address, and phone number as necessary for service provision.'
      },
      {
        title: '2. Use of Information',
        content: 'Collected information is used solely for service delivery, inquiry response, and service improvement.'
      },
      {
        title: '3. Third-Party Sharing',
        content: 'We do not share personal information with third parties without consent, except as required by law.'
      },
      {
        title: '4. Security',
        content: 'We implement appropriate security measures to prevent loss, destruction, alteration, or leakage of personal information.'
      }
    ]
  }

  return (
    <div className="py-16 bg-white">
      <div className="container">
        <div className="max-w-3xl mx-auto prose prose-lg">
          <h1 className="text-3xl font-bold mb-6 text-erb-navy">{content.title}</h1>
          <p className="text-erb-gray-600 mb-8">{content.intro}</p>
          
          {content.sections.map((section, index) => (
            <div key={index} className="mb-6">
              <h2 className="text-xl font-bold mb-2 text-erb-navy">{section.title}</h2>
              <p className="text-erb-gray-600">{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}