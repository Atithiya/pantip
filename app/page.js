import Image from "next/image";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Topic } from "./components/Topic";
import { Footer } from "./components/Footer";
import { Hightlight } from "./components/Highlight";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Hightlight />
      <Topic />
      <Footer />
    </div>
  );
}
