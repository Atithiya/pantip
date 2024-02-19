import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Topic } from "./components/Topic";
import { Footer } from "./components/Footer";
import { Searchbar } from "./components/Searchbar";
import { Mobilenavbar } from "./components/Mobilenavbar";
import { Mobilehero } from "./components/Mobilehero";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Mobilenavbar />
      <Mobilehero />
      <Searchbar />
      <Hero />
      <Topic />
      <Footer />
    </div>
  );
}
