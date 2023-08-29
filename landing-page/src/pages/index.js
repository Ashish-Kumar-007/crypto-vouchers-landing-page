import Image from 'next/image'
import { Inter } from 'next/font/google'
import HeroSection from '@/Components/HeroSection'
import FeaturesSection from '@/Components/FeaturesSection'
import AboutUsPage from '@/Components/AboutUsPage'
import Footer from '@/Components/Footer'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
    >
      <HeroSection />
      <FeaturesSection />
      <AboutUsPage />
      <Footer />

    </main>
  )
}
