import About from "@/components/About";
import Experiences from "@/components/Experiences";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { InfiniteMovingCards } from "@/components/ui/InfiniteMovingCards";
import Navbar from "@/components/ui/Navbar";
import { PinContainer } from "@/components/ui/PinContainer";
import { Spotlight } from "@/components/ui/Spotlight";
import { navItems, projects, testimonials } from "@/constants";
import { FaLocationArrow } from "react-icons/fa6";

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
      <section id="projects" className="container mx-auto py-10">
        <h1 className="text-center text-4xl font-bold md:text-5xl">
          A small selection of
          <span className="text-purple-400"> recent projects</span>
        </h1>
        <div
          // remove bg-white dark:bg-black dark:bg-grid-white/[0.05], h-[40rem] to 30rem , md:h-[30rem] are for the responsive design
          className="grid w-full grid-cols-2 justify-items-center"
        >
          {projects.map((item) => (
            <div
              className="flex h-[25rem] w-[80vw] items-center justify-center sm:w-96 lg:min-h-[32.5rem]"
              key={item.id}
            >
              <PinContainer title={item.title} href={item.link}>
                <div className="relative mb-10 flex h-[20vh] w-[80vw] items-center justify-center overflow-hidden sm:w-96 lg:h-[30vh]">
                  <div
                    className="relative h-full w-full overflow-hidden lg:rounded-3xl"
                    style={{ backgroundColor: "#13162D" }}
                  >
                    <img src="/bg.png" alt="bgimg" />
                  </div>
                  <img
                    src={item.img}
                    alt="cover"
                    className="absolute bottom-0 z-10"
                  />
                </div>
                <h1 className="line-clamp-1 text-base font-bold md:text-xl lg:text-2xl">
                  {item.title}
                </h1>
                <p
                  className="line-clamp-2 text-sm font-light lg:text-xl lg:font-normal"
                  style={{
                    color: "#BEC1DD",
                    margin: "1vh 0",
                  }}
                >
                  {item.des}
                </p>

                <div className="mb-3 mt-7 flex items-center justify-between">
                  <div className="flex items-center">
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[.2] bg-black lg:h-10 lg:w-10"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <img src={icon} alt="icon5" className="p-2" />
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-center">
                    <p className="text-purple flex text-sm md:text-xs lg:text-xl">
                      Check Live Site
                    </p>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </div>
                </div>
              </PinContainer>
            </div>
          ))}
        </div>
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
