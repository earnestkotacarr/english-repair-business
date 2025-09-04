import AnimatedHero from '@/components/AnimatedHero'
import AnimatedValueCards from '@/components/AnimatedValueCards'
import ProcessTimeline from '@/components/ProcessTimeline'
import InteractiveBeforeAfter from '@/components/InteractiveBeforeAfter'
import SocialProof from '@/components/SocialProof'
import { useTranslations } from 'next-intl'

export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
  return (
    <>
      <AnimatedHero locale={locale} />
      <AnimatedValueCards />
      <InteractiveBeforeAfter locale={locale} />
      <SocialProof locale={locale} />
      <ProcessTimeline />
    </>
  )
}