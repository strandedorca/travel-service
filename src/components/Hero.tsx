import Button from "./Button";
import gdpr from "../assets/gdpr.png";
import heroImage from "../assets/hero-image.png";

function Hero() {
  return (
    <div className="bg-butter px-8 py-16 pt-24 flex flex-col gap-4">
      <div className="*:mb-3">
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
        <Button className="mt-3">Get started</Button>
        <img className="w-fit mt-3" src={gdpr} alt="" />
      </div>
      <div>
        <img src={heroImage} alt="Hero Image" />
      </div>
    </div>
  );
}

export default Hero;
