import { HeroSection } from "@/components/Hero"
import { IntroSection } from "@/components/AProposDeNous"
import { FeatureList } from "@/components/FeatureList"
import { ContentSection } from "@/components/ContentSection"
import { ScrollToTop } from "@/components/ScrollToTopContent"
import { Services } from "@/components/Services"
import { Footer } from "@/components/FooterContent"

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

