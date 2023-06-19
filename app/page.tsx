import Hero from "./components/Hero";
import About from "./components/About";
import Blog from "./components/Blog";

export default function Home() {
  return (
    <main className=" bg-white">
      <Hero />
      <About />
      <Blog />
    </main>
  );
}
