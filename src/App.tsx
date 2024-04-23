import { useEffect, useState } from "react";
import "./App.css";
import Features from "./components/Features.tsx";
import Goals from "./components/Goals.tsx";
import Header from "./components/Header.tsx";
import Hero from "./components/Hero.tsx";
import Screenshot from "./components/Screenshot.tsx";
import Testimonials from "./components/Testimonials.tsx";
import "./fontawesome.ts";
import Notice from "./components/Notice.tsx";

function App() {
  const [isAtTop, setIsAtTop] = useState(true);
  const [chosenGoal, setChosenGoal] = useState("productivity");
  const handleChooseGoal = (goal: string): void => {
    setChosenGoal(goal);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsAtTop(false);
      } else {
        setIsAtTop(true);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div className="text-lg lg:text-base">
      <div
        className={`notice text-sm
        ${isAtTop ? "" : "absolute"}`}
      >
        <Notice />
      </div>
      <div
        className={`header h-16 fixed w-full z-10 
        ${
          isAtTop
            ? "animate-[turn-transparent_0.25s_ease-in-out_forwards] bg-transparent"
            : "animate-[turn-white_0.25s_ease-in-out_forwards] bg-white"
        }`}
      >
        <Header />
      </div>
      <div className="hero">
        <Hero />
      </div>
      <div className="testimonials">
        <Testimonials />
      </div>
      <div className="goals">
        <Goals onChooseGoal={handleChooseGoal} />
      </div>
      <div className="screenshot">
        <Screenshot goal={chosenGoal} />
      </div>
      <div className="features">
        <Features />
      </div>
    </div>
  );
}

export default App;
