import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import AboutFacility from "@/components/AboutFacility";
import WhyPrinceGeorge from "@/components/WhyPrinceGeorge";
import WhyWorkWithUs from "@/components/WhyWorkWithUs";
import SignupForm from "@/components/SignupForm";
import H4UModel from "@/components/H4UModel";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <StatsBar />
      <AboutFacility />
      <WhyPrinceGeorge />
      <WhyWorkWithUs />
      <SignupForm />
      <H4UModel />
      <FAQ />
      <Footer />
    </main>
  );
}
