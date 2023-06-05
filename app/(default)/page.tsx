export const metadata = {
  title: 'Home - Bakkhos Labs',
  description: 'Bakkhos Labs is a cybersecurity training and consulting company.',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'
import Team from '@/components/team'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Testimonials />
      <Team />
    </>
  )
}
