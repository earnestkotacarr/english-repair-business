import AnimatedHero from '@/components/AnimatedHero'
import AnimatedValueCards from '@/components/AnimatedValueCards'
import ProcessTimeline from '@/components/ProcessTimeline'
import InteractiveBeforeAfter from '@/components/InteractiveBeforeAfter'

export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
  return (
    <>
      <AnimatedHero locale={locale} />
      <AnimatedValueCards />
      <InteractiveBeforeAfter locale={locale} />
      <ProcessTimeline />
    </>
  )
}