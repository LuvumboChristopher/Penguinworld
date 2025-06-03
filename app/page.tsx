import Head from "next/head"
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
      <Head>
        <title>PenguinWorld - Services de voyage</title>
        <meta name="description" content="Découvrez nos services de mise à disposition" />
        <link rel="icon" href="/favicon.png" />
      </Head>
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

