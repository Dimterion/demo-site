import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import ButtonGradient from "./assets/svg/ButtonGradient";

const App = () => {
  return (
    <>
      <div className="overflow-hidden pt-[4.75rem] lg:pt-[5.25rem]"></div>
      <Header />
      <Hero />
      <Features />
      <ButtonGradient />
    </>
  );
};

export default App;
