import Navbar from "../../components/layout/AppBar/Navbar.jsx";
import HeroSection from "../../components/landingComponents/heroSection/heroSection.jsx";
import ContentSection from "../../components/landingComponents/contentSection/contentSection.jsx";
import PricingSection from "../../components/landingComponents/pricingSection/pricingSection.jsx";
import arrow from "../../assets/icons/arrow-down.svg";

function MainView() {
  const logoUrls = [
    {
      imgSrc: "logo1.svg",
    },
    {
      imgSrc: "logo2.svg",
    },
    {
      imgSrc: "logo3.svg",
    },
    {
      imgSrc: "logo4.svg",
    },
    {
      imgSrc: "logo4.svg",
    },
  ];

  const contentWithText = [
    {
      imgSrc: "CS1.png",
      title: "Benchmarks",
      description:
        "See how you stack up against comparable companies in similar stages.",
    },
    {
      imgSrc: "CS2.png",
      title: "Pricing Audit",
      description:
        "Benchmark the health of your monetization and pricing strategy.",
    },
    {
      imgSrc: "CS3.png",
      title: "Retention Audit",
      description:
        "Audit where revenue leakage exists and where you can increase retention.",
    },
  ];
  return (
    <div className="sm:px-0 lg:px-28">
      <Navbar />
      <HeroSection
        title="Grow your subscription business"
        description="Outcome-centered products that reduce churn, optimize pricing, and grow your subscription business end-to-end."
        linkText="Learn more"
        imageSrc="HS-1.png"
        reverse={false}
      >
        <div className="flex gap-5">
          <button className="bg-Secondary text-white py-2 px-8 rounded font-semibold">
            Get Started
          </button>
          <button className="bg-white text-black rounded-full border w-10 h-10 flex justify-center items-center">
            <img src={arrow} alt="Arrow down" className="w-4 h-4" />
          </button>
        </div>
      </HeroSection>

      <ContentSection items={logoUrls} size={false} />

      <HeroSection
        title="Subscription index"
        description="A daily dataset to keep you up to date on subscription market trends and what's happening in your vertical."
        linkText="Learn more"
        imageSrc="HS-2.png"
        reverse={true}
      />
      <HeroSection
        title="In-depth metrics"
        description="Accurate, real-time reporting at your fingertips. Getting data has never been easier."
        linkText="Learn more"
        imageSrc="HS-3.png"
        reverse={false}
        background="bg-[#F8F8F8]"
      />
      <ContentSection items={contentWithText} size={true} />
      <PricingSection/>
    </div>
  );
}

export default MainView;
