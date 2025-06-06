import { HeroSection } from "@/components/Hero"
import { IntroSection } from "@/components/AProposDeNous"
import { FeatureList } from "@/components/FeatureList"
import { ContentSection } from "@/components/ContentSection"
import { ScrollToTop } from "@/components/ScrollToTop"
import { Services } from "@/components/Services"
import { Footer } from "@/components/Footer"

export default function Home() {
  return (
    <>
      <ScrollToTop />
      <main>
        <HeroSection />
        <FeatureList/>
        <Services />
        <ContentSection/>
        <IntroSection />
      </main>
      <Footer />
    </>
  )
}

