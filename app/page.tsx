import Banner from "./components/Banner";
import Features from "./components/Features";
import Navigation from "./components/Navigation";
import Newsletter from "./components/Newsletter";
import Teachers from "./components/Teachers";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Banner />
      <Features />
      <Teachers />
      <Newsletter />
    </main>
  );
}
