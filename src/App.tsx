import "./App.css";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { ScrollToTop } from "./components/ScrollToTop";
import ReadyToDive from "./components/ReadyToDive";
import LetSuppliersFindYou from "./components/LetSuppliersFindYou";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";
import BuyerSeller from "./components/BuyerSeller";

function App() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <ReadyToDive />
      <BuyerSeller />
      <LetSuppliersFindYou />
      <HowItWorks />
      <Footer />
      <ScrollToTop />
    </main>
  );
}

export default App;
