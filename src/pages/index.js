import Image from 'next/image'
import { Inter } from 'next/font/google'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import HeroSection from '@/components/HeroSection'
import FeaturesSection from '@/components/FeaturesSection'
import AboutUsPage from '@/components/AboutUsPage'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
    >
      <HeroSection />
      <FeaturesSection />
      <AboutUsPage />
      <Footer />
      {/* <ConnectButton /> */}
    </main>
  )
}
