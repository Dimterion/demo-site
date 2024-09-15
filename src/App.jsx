import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Collaboration from "./components/Collaboration";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Services from "./components/Services";

const App = () => {
  return (
    <>
      <div className="overflow-hidden pt-[4.75rem] lg:pt-[5.25rem]">
        <Header />
        <Hero />
        <Features />
        <Collaboration />
        <Services />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
