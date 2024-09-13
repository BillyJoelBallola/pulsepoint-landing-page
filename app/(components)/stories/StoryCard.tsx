import { ArrowRight } from "lucide-react";

type StoryCardType = {
  title: string;
  description: string;
  href?: string;
};

function StoryCard({ title, description, href }: StoryCardType) {
  return (
    <a
      href={href}
      className="border border-zinc-800 p-4 flex flex-col gap-4 group hover:bg-orange-600 duration-300 cursor-pointer"
    >
      <div className="w-12 h-[2px] group-hover:bg-zinc-100 bg-zinc-800" />
      <h3 className="group-hover:text-gray-100 text-xl font-semibold">
        {title}
      </h3>
      <p className="group-hover:text-gray-100 text-zinc-600 text-xs">
        {description}
      </p>
      <ArrowRight className="self-end hidden group-hover:block" />
    </a>
  );
}

export default StoryCard;
