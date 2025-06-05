import { HeroSection } from "@/components/Hero"
import { IntroSection } from "@/components/intro-section"
import { FeatureList } from "@/components/FeatureList"
import { ContentSection } from "@/components/ContentSection"
import { ScrollToTop } from "@/components/scrollToTop"
import { Footer } from "@/components/footer"
import { Services } from "@/components/Services"

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

