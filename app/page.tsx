import HeroProfessional from "@/components/HeroProfessional";
import AboutFacilityBento from "@/components/AboutFacilityBento";
import WhyPrinceGeorge from "@/components/WhyPrinceGeorge";
import WhyWorkWithUs from "@/components/WhyWorkWithUs";
import SignupForm from "@/components/SignupForm";
import H4UModel from "@/components/H4UModel";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroProfessional />
      <AboutFacilityBento />
      <WhyPrinceGeorge />
      <WhyWorkWithUs />
      <SignupForm />
      <H4UModel />
      <FAQ />
      <Footer />
    </main>
  );
}
