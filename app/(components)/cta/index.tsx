import Image from "next/image";
import ctaPattern from "@/app/assets/cta-pattern.png";

function CTA() {
  return (
    <div className="side-margin mt-16 md:mt-24 h-[200px] relative border-b border-zinc-800">
      <div className="z-20 absolute w-full bottom-10 flex gap-10 md:gap-0 flex-col md:flex-row items-center justify-center md:justify-between">
        <h2 className="text-3xl md:text-4xl w-full md:w-[400px] text-center">
          Response to Grow Your Business with{" "}
          <span className="text-orange-600">PlusPoint?</span>
        </h2>
        <button className="p-2 px-4 border bg-zinc-100 text-[#111111] hover:bg-transparent hover:text-zinc-100 duration-200">
          Get in Touch
        </button>
      </div>
      <Image
        src={ctaPattern}
        alt="cta pattern"
        className="h-[140px] md:h-auto absolute bottom-0 left-1/2 -translate-x-1/2"
      />
    </div>
  );
}

export default CTA;
