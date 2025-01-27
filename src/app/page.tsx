import Hero from "@/components/Home";
import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";
import Projects from "@/components/sections/projects";
import Technology from "@/components/sections/technology";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Technology />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
