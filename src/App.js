import Banner from "./components/Banner";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Navbar from "./components/Navbar";
import Offer from "./components/Offer";

function App() {
  return (
    <div>
      <Navbar />

      <Hero />

      <Features />

      <HowItWorks />
      <Offer />
      <Banner />
      <Footer />
    </div>
  );
}

export default App;
