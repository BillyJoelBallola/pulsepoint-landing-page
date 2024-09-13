import { ArrowDownRight } from "lucide-react";
import React from "react";

type FAQCardTypes = {
  description: string;
  title: string;
};

function FAQCard({ description, title }: FAQCardTypes) {
  return (
    <div className="cursor-pointer group hover:bg-orange-600 duration-300 grid gap-14 px-8 py-10 border-b border-zinc-800">
      <p className="text-lg group-hover:text-zinc-100 text-zinc-400 w-full md:w-[500px]">
        {description}
      </p>
      <div className="flex items-center justify-between">
        <h3 className="text-xl md:text-3xl lg:text-4xl">{title}</h3>
        <button className="rounded-full border p-2">
          <ArrowDownRight className="size-4 md:size-6 lg:size-8 group-hover:-rotate-90 duration-300" />
        </button>
      </div>
    </div>
  );
}

export default FAQCard;
