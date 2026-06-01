import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import { QuickRegistration } from "./QuickRegistration";
import { ScholarshipTest } from "./ScholarshipTest";
import { Courses } from "./Courses";
import { WhyChoose } from "./WhyChoose";
import { TopResults } from "./TopResults";
import { Testimonials } from "./Testimonials";
import { AcademyAdvantages } from "./AcademyAdvantages";
import { Branches } from "./Branches";
import { Gallery } from "./Gallery";
import { FAQ } from "./FAQ";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { FloatingWhatsApp } from "./FloatingWhatsApp";
import { ScrollToTop } from "./ScrollToTop";
import { useEffect } from "react";
import "./custom.css";

export default function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <QuickRegistration />
      <ScholarshipTest />
      <Courses />
      <WhyChoose />
      <TopResults />
      <Testimonials />
      <AcademyAdvantages />
      <Branches />
      <Gallery />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
      <ScrollToTop />
    </div>
  );
}
