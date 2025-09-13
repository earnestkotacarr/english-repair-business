export default function LegalPage({ params: { locale } }: { params: { locale: string } }) {
  const content = locale === 'ja' ? {
    title: '特定商取引法に基づく表記',
    sections: [
      {
        title: '販売業者',
        content: 'English Repair'
      },
      {
        title: '運営責任者',
        content: 'Riley Eusden'
      },
      {
        title: '所在地',
        content: '東京都[区][住所]'
      },
      {
        title: 'お問い合わせ',
        content: 'info@englishrepair.com'
      },
      {
        title: '商品・サービスの価格',
        content: '各サービスページに記載の通り（税込表示）'
      },
      {
        title: '支払方法',
        content: '銀行振込、請求書払い'
      },
      {
        title: '支払時期',
        content: 'サービス提供開始前または完了後（契約により異なります）'
      },
      {
        title: '納期',
        content: '各サービスページに記載の通り、またはお見積り時にご案内'
      },
      {
        title: '返品・キャンセル',
        content: 'サービスの性質上、着手後のキャンセル・返金は原則として承っておりません。'
      }
    ]
  } : {
    title: 'Legal Information',
    sections: [
      {
        title: 'Service Provider',
        content: 'English Repair'
      },
      {
        title: 'Representative',
        content: 'Riley Eusden'
      },
      {
        title: 'Location',
        content: 'Tokyo, Japan'
      },
      {
        title: 'Contact',
        content: 'info@englishrepair.com'
      },
      {
        title: 'Service Pricing',
        content: 'As listed on each service page (tax included)'
      },
      {
        title: 'Payment Methods',
        content: 'Bank transfer, Invoice payment'
      },
      {
        title: 'Payment Terms',
        content: 'Before service commencement or upon completion (varies by contract)'
      },
      {
        title: 'Delivery Time',
        content: 'As stated on service pages or provided in quotation'
      },
      {
        title: 'Returns & Cancellations',
        content: 'Due to the nature of our services, cancellations or refunds are generally not accepted after work has commenced.'
      }
    ]
  }

  return (
    <div className="py-16 bg-white">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-erb-navy">{content.title}</h1>
          
          <div className="bg-erb-gray-50 rounded-lg p-8">
            {content.sections.map((section, index) => (
              <div key={index} className="mb-6 last:mb-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="font-semibold text-erb-navy">
                    {section.title}
                  </div>
                  <div className="md:col-span-2 text-erb-gray-600">
                    {section.content}
                  </div>
                </div>
                {index < content.sections.length - 1 && (
                  <hr className="mt-6 border-erb-gray-200" />
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-8 p-4 bg-erb-blue-50 rounded-lg">
            <p className="text-sm text-erb-gray-600">
              {locale === 'ja' 
                ? '最終更新日: 2024年1月' 
                : 'Last Updated: January 2024'}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}