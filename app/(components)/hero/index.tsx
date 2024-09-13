import { ArrowDown, MoveDown } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="grid md:grid-cols-[260px_1fr]  lg:grid-cols-2 h-screen w-full"
    >
      <div className="hero-bg bg-[#111111] relative hidden md:block">
        <span className="absolute bottom-4 left-4 text-xl font-semibold hidden lg:block">
          2096 Los Angeles St, California
        </span>
        <div className="absolute bottom-0 right-6 flex flex-col gap-10 items-center">
          <div className="flex flex-col items-center py-4 relative bg-orange-600 px-5 w-4 text-sm font-semibold leading-tight text-center">
            <span className="text-upright"># T O P </span>
            <br />
            <br />
            <span className="text-upright">1</span>
            <br />
            <br />
            <span className="text-upright">A G E N C Y</span>
            <div className="absolute size-full -right-2 -top-2 border border-orange-600" />
          </div>
          <div className="w-2 h-10 bg-white" />
        </div>
      </div>
      <div className="py-10 mx-auto md:mx-0 md:pl-10 w-[92%] md:w-[87%] lg:w-[75%] flex flex-col justify-between">
        <div />
        <div className="flex flex-col text-center items-center gap-4 md:gap-8">
          <div className="md:hidden tracking-[.4rem] sm:tracking-[.7rem] flex flex-col items-center py-4 relative bg-orange-600 px-5 text-sm font-semibold text-center">
            <span># TOP 1 AGENCY</span>
            <div className="absolute size-full -right-2 -top-2 border border-orange-600" />
          </div>
          <h1 className="text-5xl leading-tight font-semibold">
            <span className="text-orange-600">CREATIVITY</span> BEYOND
            CONCEPTION
            <span className="text-orange-600">.</span>
          </h1>
          <MoveDown className="size-14 hidden md:block" />
          <p className="text-zinc-400">
            Our approach combines creative precision with strateic insights to
            craft tailored marketing campaings that resonate with your target
            audience.
          </p>
        </div>
        <div className="flex items-center justify-center flex-col gap-16 md:gap-0 md:flex-row md:justify-between">
          <button className="relative bg-gray-100 text-[#212121] py-2 px-4 text-sm">
            EXPLORE NOW
            <div className="absolute border border-gray-100 size-full -right-2 top-2" />
          </button>
          <span className="text-zinc-600 text-sm flex items-center gap-2">
            (scroll <ArrowDown className="size-4" /> for more)
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
