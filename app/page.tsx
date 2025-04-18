import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Services from "@/components/services"
import ServiceAreas from "@/components/service-areas"
import Testimonials from "@/components/testimonials"
import Pricing from "@/components/pricing"
import Contact from "@/components/contact"
import Gallery from "@/components/gallery"
import Faq from "@/components/faq"
import Footer from "@/components/footer"
import FloatingContact from "@/components/floating-contact"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80 dark:from-background dark:to-background/90">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <ServiceAreas />
        <Testimonials />
        <Pricing />
        <Contact />
        <Gallery />
        <Faq />
      </main>
      <FloatingContact />
      <Footer />
    </div>
  )
}
