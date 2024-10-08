import Navbar from "@/components/Navbar";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import Products from "@/sections/Products";
import Statistics from "@/sections/Statistics";

export default function Home() {
  return (
    <main>
      {/* Header section */}
      <Navbar />

      {/* Hero section */}
      <Hero />

      {/* Statistics section */}
      <Statistics />

      {/* Products section */}
      <Products />

      {/* Footer section */}
      <Footer />
      
    </main>
  );
}
