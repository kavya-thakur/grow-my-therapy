import About from "./components/sections/About";
import BackgroundAccordion from "./components/sections/BackgroundAccordion";
import CTA from "./components/sections/CTA";
import FAQ from "./components/sections/FAQ";
import Footer from "./components/sections/Footer";
import Hero from "./components/sections/Hero";
import OfficeSection from "./components/sections/OfficeSection";
import Specialties from "./components/sections/Specialties";
import SplitSection from "./components/sections/SplitSection";
import Navbar from "./components/smallComponents/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SplitSection />
      <Specialties />
      <About />
      <OfficeSection />
      <FAQ />
      <BackgroundAccordion />
      <CTA />
      <Footer />
    </>
  );
}
