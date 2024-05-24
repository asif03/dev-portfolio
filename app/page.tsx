import About from "@/components/About";
import Experiences from "@/components/Experiences";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { InfiniteMovingCards } from "@/components/ui/InfiniteMovingCards";
import Navbar from "@/components/ui/Navbar";
import { Spotlight } from "@/components/ui/Spotlight";
import { navItems, testimonials } from "@/constants";

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center justify-center bg-white/85 dark:bg-black-100">
      <div className="left-0 top-0 flex h-auto w-full items-center justify-center bg-white py-10 bg-grid-black/[0.2] dark:bg-black-100 dark:bg-grid-white/[0.3] lg:h-[100vh] lg:py-2">
        <Spotlight
          className="-top-40 left-0 md:-top-20 md:left-60"
          fill="white"
        />
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100"></div>
        <div className="h-auto w-full lg:max-w-7xl">
          <FloatingNav navItems={navItems} />
          <Navbar />
          <Hero />
        </div>
      </div>
      <section id="about" className="relative">
        <About />
      </section>
      <section id="testimonials" className="container py-10">
        <h1 className="text-center text-4xl font-bold md:text-5xl">
          Kind words from
          <span className="text-purple-400"> satisfied clients</span>
        </h1>
        <div
          // remove bg-white dark:bg-black dark:bg-grid-white/[0.05], h-[40rem] to 30rem , md:h-[30rem] are for the responsive design
          className="flex flex-col items-center justify-center overflow-hidden rounded-md pt-5 antialiased"
        >
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="normal"
          />
        </div>
      </section>
      <section id="experience" className="container mx-auto py-10">
        <h1 className="text-center text-4xl font-bold md:text-5xl">
          My
          <span className="text-purple-400"> work experience</span>
        </h1>
        <Experiences />
      </section>
      <Footer />
    </main>
  );
}
