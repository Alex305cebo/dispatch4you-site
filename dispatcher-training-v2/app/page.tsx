import HeroSection from '@/components/HeroSection'
import FeaturesSection from '@/components/FeaturesSection'
import CourseModulesSection from '@/components/CourseModulesSection'
import BenefitsSection from '@/components/BenefitsSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import PricingSection from '@/components/PricingSection'
import FAQSection from '@/components/FAQSection'
import CTASection from '@/components/CTASection'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <CourseModulesSection />
      <BenefitsSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
    </main>
  )
}
