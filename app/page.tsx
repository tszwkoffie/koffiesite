import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { FlavorCarousel } from "@/components/flavor-carousel"
import { BentoGrid } from "@/components/bento-grid"
import { ActivationsSection } from "@/components/activations-section"
import { ProductsSection } from "@/components/products-section"
import { SocialSection } from "@/components/social-section"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ActivationsSection />
      <FlavorCarousel />
      <ProductsSection />
      <BentoGrid />
      <SocialSection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
