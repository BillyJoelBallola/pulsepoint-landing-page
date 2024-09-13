import Subtitle from "../subtitle";
import FAQCard from "./FAQCard";

const faqData = [
  {
    description:
      "Find out about all how we cover website design, app development, and digital marketing with clear explanations.",
    title: "About Services",
  },
  {
    description:
      "See how PulsePoint manages project timelines and milestone effectively and ensure timely delivery to meet project goals.",
    title: "Timelines",
  },
  {
    description:
      "Learn how PulsePoint provides technical support, Discover our system designed to keep your projects running smoothly.",
    title: "Technical Support",
  },
  {
    description:
      "Dalve into PulsePoint's pricing and cost details. Crafted to perfectly aling with your project's specific requirements.",
    title: "Cost and Pricing",
  },
];

const FAQ = () => {
  return (
    <section className="side-margin my-16 md:my-24 grid gap-8">
      <Subtitle subtitle="FAQ" classStyling="justify-center" />
      <h2 className="text-4xl md:text-5xl text-center">
        RESPONSE TO YOUR TOP QUIRIES
      </h2>
      <div className="grid">
        {faqData.map((faq, idx) => (
          <FAQCard key={idx} title={faq.title} description={faq.description} />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
