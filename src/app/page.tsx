import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Place from "./place/page";

import About from "./components/about";
import Footer from "./components/footer";
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Place />
      <About />
      <Footer />
    </main>
  );
}