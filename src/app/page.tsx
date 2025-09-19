import FadeOnResize from '@/components/FadeOnResize';
import Hero from '../components/Hero';
import CardGrid from '@/components/CardGrid';
import BlogSection from '@/components/BlogSection';
import Stats from '@/components/Stats';
import SplitSection from '@/components/SplitTextSection';
import ParallaxCards from '@/components/ParallaxCards';
import TestimonialParallax from '@/components/Testimonials';
import HowItWorks from '@/components/ProgressComponent';

export default function SonicLandingPage() {
  return (
    <FadeOnResize>
      <main className="min-h-screen">
        <Hero
          backgroundImage="/porsche.webp"
          location="Dubai, UAE"
          tagline="Prime Collection by Rydex!"
          rightText="Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet nunc ut."
          category="Car Rental"
          title="Enjoy Easy Rides, Pick Your Way"
        />

        <Stats
          title={'About Us'}
          description={
            'Discover the passion and expertise behind Rydex, your premier destination for luxury car rentals and unmatched service.'
          }
        />

        <SplitSection
          title={'Our Featured Models'}
          description={
            'Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae.'
          }
        />

        <ParallaxCards />

        <CardGrid />

        <TestimonialParallax />

        <HowItWorks />

        <BlogSection />
      </main>
    </FadeOnResize>
  );
}
