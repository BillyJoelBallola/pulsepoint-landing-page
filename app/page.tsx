import CTA from "./(components)/cta";
import FAQ from "./(components)/faq";
import Footer from "./(components)/footer";
import Hero from "./(components)/hero";
import Navbar from "./(components)/navbar";
import Services from "./(components)/services";
import Stories from "./(components)/stories";
import Testimonial from "./(components)/testimonial";
import { NavbarContextProvider } from "./context/NavbarContext";

export default function Home() {
  return (
    <main className="text-gray-50 bg-[#111111] min-h-screen">
      <NavbarContextProvider>
        <Navbar />
      </NavbarContextProvider>
      <Hero />
      <Stories />
      <Services />
      <Testimonial />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
