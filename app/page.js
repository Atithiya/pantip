import Image from "next/image";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Topic } from "./components/Topic";
import { Footer } from "./components/Footer";
import { Searchbar } from "./components/Searchbar";
import { Mobilenavbar } from "./components/Mobilenavbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Mobilenavbar />
      <Searchbar />
      <Hero />
      <Topic />
      <Footer />
    </div>
  );
}
