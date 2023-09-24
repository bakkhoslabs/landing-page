export const metadata = {
  title: 'Bakkhos Labs - Cybersecurity Training and Consulting',
  description: 'Bakkhos Labs is a cybersecurity training and consulting company.',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Clients from '@/components/clients'
import Team from '@/components/team'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Clients />
      <Team />
    </>
  )
}
