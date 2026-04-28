import { HeroSection } from "@/components/Hero"
import { IntroSection } from "@/components/AProposDeNous"
import { FeatureList } from "@/components/FeatureList"
import { ContentSection } from "@/components/ContentSection"
import { Services } from "@/components/Services"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeatureList/>
      <Services />
      <ContentSection/>
      <IntroSection />
      <Footer />
    </>
  )
}

