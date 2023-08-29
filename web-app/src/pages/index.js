import Image from 'next/image'
import { Inter } from 'next/font/google'
import Dashboard from '@/Components/Dashboard'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
    >
      {/* <HeroSection />
      <FeaturesSection />
      <AboutUsPage />
      <Footer /> */}
      <Dashboard />
    </main>
  )
}
