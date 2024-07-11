import Design from "./sections/Design";
import Expectation from "./sections/Expectation";
import Feature from "./sections/Feature";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import News from "./sections/News";
import Pricing from "./sections/Pricing";
import Recent from "./sections/Recent";
import Services from "./sections/Services";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Design />
      <Feature />
      <Pricing />
      <Expectation />
      <Recent />
      <News />
      <Footer />
    </div>
  )
}