import Heading3 from "./Heading3";
import Heading4 from "./Heading4";
import comprehensive from "../assets/vistual-assistance.png";
import team from "../assets/reliable.png";
import security from "../assets/security.png";
import support from "../assets/support-assistance.png";
import SlidingButton from "./SlidingButton";

function Features() {
  const features = [
    {
      title: "Comprehensive Virtual Assistance Services",
      content:
        "From administrative tasks to project management, our virtual assistants are skilled in handling a wide range of tasks to support your personal and professional needs.",
      button: "Explore our onboarding services",
      src: comprehensive,
      alt: "Comprehensive Services",
    },
    {
      title: "Dedicated and Reliable Team",
      content:
        "Our team of virtual assistants is committed to providing reliable and efficient support, ensuring that your tasks are completed accurately and on time.",
      button: "Meet our team",
      src: team,
      alt: "Dedicated & Reliable Team",
    },
    {
      title: "Confidentiality and Security",
      content:
        "We prioritize the confidentiality and security of your information, implementing strict measures to safeguard your data and privacy.",
      button: "Learn more about our terms",
      src: security,
      alt: "Confidentiality and Security",
    },
    {
      title: "24/7 Support and Assistance",
      content:
        "Our virtual assistants are available around the clock to provide support and assistance whenever you need it, ensuring that you can focus on your priorities without interruption.",
      button: "See our support offerings",
      src: support,
      alt: "Support and Assistance",
    },
  ];
  return (
    <div className="p-14 flex flex-col gap-10">
      <Heading3>We’re the #1 virtual assistant solution for a reason.</Heading3>
      {features.map((item) => {
        return (
          <div key={item.title} className="flex flex-col gap-3">
            <Heading4>{item.title}</Heading4>
            <p>{item.content}</p>
            <SlidingButton>{item.button}</SlidingButton>
            <div className="w-full flex justify-center items-center">
              <img className="w-[400px] h-auto" src={item.src} alt={item.alt} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Features;
