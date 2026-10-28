import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import ToolsMarquee from "@/components/ToolsMarquee";
import Experience from "@/components/Experience";
import About from "@/components/About";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-midnight text-softwhite flex flex-col selection:bg-cobalt selection:text-white">
      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Hero Section (First Fold) */}
      <Hero />

      {/* Selected Projects */}
      <Projects />

      {/* Tools I Work With Marquee */}
      <ToolsMarquee />

      {/* Experience & Practical Journey */}
      <Experience />

      {/* A Little About Me */}
      <About />

      {/* My Resume */}
      <Resume />

      {/* Let's Connect (Contact) */}
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  );
}
