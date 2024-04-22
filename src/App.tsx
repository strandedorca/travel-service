import "./App.css";
import Header from "./components/Header.tsx";
import Hero from "./components/Hero.tsx";
import Testimonials from "./components/Testimonials.tsx";
import "./fontawesome.ts";

function App() {
  return (
    <div className="container text-lg">
      <div className="header h-14">
        <Header />
      </div>
      <div className="hero">
        <Hero />
      </div>
      <div className="testimonials">
        <Testimonials />
      </div>
    </div>
  );
}

export default App;
