import Button from "./Button";
import gdpr from "../assets/gdpr.png";
import heroImage from "../assets/hero-image.png";
import heroShape from "../assets/hero-shape.svg";

function Hero() {
  return (
    <div className="bg-butter flex flex-col gap-5 px-8 py-16">
      <p className="uppercase text-sm font-semibold">
        Virtual Assistance Service
      </p>
      <h2 className="font-title text-5xl font-semibold">
        Elevate your productivity with Virtuo Assist
      </h2>
      <p className="text-xl">
        Streamline your tasks and maximize efficiency. Experience seamless
        support tailored to your needs with Virtuo Assist.
      </p>
      <Button>Get started</Button>
      <img className="w-fit" src={gdpr} alt="" />
      <div className="relative mt-4">
        <img
          src={heroShape}
          alt="Decorative Shape"
          className="absolute -top-14 left-0 z-0 scale-y-110 scale-x-125"
        />
        <img src={heroImage} alt="Hero Image" className="relative z-20" />
      </div>
    </div>
  );
}

export default Hero;
