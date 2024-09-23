import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Collaboration from "./components/Collaboration";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Footer from "./components/Footer";
import ButtonGradient from "./assets/svg/ButtonGradient";

const App = () => {
  return (
    <>
      <main className="overflow-hidden pt-24">
        <Header />
        <Hero />
        <Features />
        <Collaboration />
        <Services />
        <Pricing />
        <Roadmap />
        <Footer />
      </main>
      <ButtonGradient />
    </>
  );
};

export default App;
