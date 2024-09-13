import { MoveDown } from "lucide-react";
import StoryCard from "./StoryCard";
import Subtitle from "../subtitle";

const leftCardsData = [
  {
    title: "10M+",
    description:
      "Trusted by million users worldwide, our platform delivers exceptional performance and reliability.",
  },
  {
    title: "13+ years",
    description:
      "Achieve your goals, leverage our extensive expertise, over 13+ years of industry experience.",
  },
];

const rightCardsData = [
  {
    title: "140%",
    description:
      "Reflecting our commitment to innovation and excellence to the digital industry.",
  },
  {
    title: "85%",
    description:
      "Maintained a client retention rate, with a significant portion of clients opting for long-term contracts.",
  },
];

const Stories = () => {
  return (
    <section className="side-margin grid grid-cols-1 md:grid-cols-[1fr_2px_1fr]">
      <div className="md:pr-10 py-16 md:py-24 flex flex-col gap-8">
        <Subtitle subtitle="Stories" classStyling="md:hidden justify-center" />
        <div className="flex flex-col gap-4 text-center md:text-start">
          <h2 className="text-4xl">
            Transformative business growth through innovative solutions
          </h2>
          <p className="text-zinc-400">
            We specialize in understanding your aspiration and applying our deep
            knowledge to cr5aft solutions that exceed expecrations. Out
            commitment to transforming your ideas into reality.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-col gap-4">
            {leftCardsData.map((card, idx) => (
              <StoryCard
                key={idx}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
          <div className="flex flex-col gap-4">
            {rightCardsData.map((card, idx) => (
              <StoryCard
                key={idx}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="hidden md:block bg-zinc-800" />
      <div className="hidden md:flex flex-col justify-between pl-10 py-16 md:py-24">
        <Subtitle subtitle="Stories" />
        <MoveDown className="size-14 self-center" />
        <h2 className="text-5xl self-end font-semibold">ABOUT US</h2>
      </div>
    </section>
  );
};

export default Stories;
