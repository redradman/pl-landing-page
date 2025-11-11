import { Navigation } from '@/components/sections/navigation';
import { Hero } from '@/components/sections/hero';
import { Introduction } from '@/components/sections/introduction';
import { PrinciplesCards } from '@/components/sections/principles-cards';
import { Comparison } from '@/components/sections/comparison';
import { Timeline } from '@/components/sections/timeline';
import { LeadForm } from '@/components/sections/lead-form';
import { CallToAction } from '@/components/sections/cta';
import { Footer } from '@/components/sections/footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Introduction />
      <PrinciplesCards />
      <Comparison />
      <Timeline />
      <LeadForm />
      <CallToAction />
      <Footer />
    </div>
  );
}
