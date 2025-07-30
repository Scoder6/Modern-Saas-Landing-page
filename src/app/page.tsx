import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { Footer } from '@/components/Footer'
import { Testimonials } from '@/components/TestimonialsCarousel'
import {FAQ} from '@/components/FAQ'
import {Features} from '@/components/Features'
import {Pricing} from '@/components/pricing'
import { BlogResources } from '@/components/BlogResources'

export default function Home() {
  return (
    <div className="">
      <Navbar />
      
      <main className="flex-1">
        <Hero />
        
        {/* Divider */}
        <div className="relative py-12 md:py-16 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
            <div className="w-full border-t border-gray-200 dark:border-gray-800 max-w-7xl mx-auto"></div>
          </div>
        </div>
      
        {/* Added id to match navbar href */}
        <section id="features">
          <Features />
        </section>
        
        <div className="relative py-12 md:py-16 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
            <div className="w-full border-t border-gray-200 dark:border-gray-800 max-w-7xl mx-auto"></div>
          </div>
        </div>

        {/* Added id for blog section */}
        <section id="blog">
          <BlogResources />
        </section>
        
        <div className="relative py-12 md:py-16 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
            <div className="w-full border-t border-gray-200 dark:border-gray-800 max-w-7xl mx-auto"></div>
          </div>
        </div>        

        {/* Added id for pricing section */}
        <section id="pricing">
          <Pricing/>
        </section>
        
        <div className="relative py-12 md:py-16 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
            <div className="w-full border-t border-gray-200 dark:border-gray-800 max-w-7xl mx-auto"></div>
          </div>
        </div>

        {/* Added id for testimonials section */}
        <section id="testimonials">
          <Testimonials />
        </section>
        
        <div className="relative py-12 md:py-16 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
            <div className="w-full border-t border-gray-200 dark:border-gray-800 max-w-7xl mx-auto"></div>
          </div>
        </div>

        {/* Added id for FAQ section */}
        <section id="faq">
          <FAQ />
        </section>
        
        <div className="relative py-12 md:py-16 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
            <div className="w-full border-t border-gray-200 dark:border-gray-800 max-w-7xl mx-auto"></div>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  )
}