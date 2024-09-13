"use client";

import Image from "next/image";
import Subtitle from "../subtitle";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef, useState } from "react";
import TestimonialCard from "./TestimonialCard";

const testimodialsData = [
  {
    testimonial:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta possimus qui quibusdam, excepturi quaerat eos.",
    username: "Michell Awombe",
    userRole: "Tech Lead",
    userCompany: "Globaltech Inc.",
    tags: ["Sustainability", "Business Analytics", "Strategy"],
  },
  {
    testimonial:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta possimus qui quibusdam, excepturi quaerat eos.",
    username: "Michell Awombe",
    userRole: "Tech Lead",
    userCompany: "Globaltech Inc.",
    tags: ["Sustainability", "Business Analytics", "Strategy"],
  },
  {
    testimonial:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta possimus qui quibusdam, excepturi quaerat eos.",
    username: "Michell Awombe",
    userRole: "Tech Lead",
    userCompany: "Globaltech Inc.",
    tags: ["Sustainability", "Business Analytics", "Strategy"],
  },
  {
    testimonial:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta possimus qui quibusdam, excepturi quaerat eos.",
    username: "Michell Awombe",
    userRole: "Tech Lead",
    userCompany: "Globaltech Inc.",
    tags: ["Sustainability", "Business Analytics", "Strategy"],
  },
];

const Testimonial = () => {
  const carouselContainerRef = useRef(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(1);

  const scrollRight = () => {
    if (carouselContainerRef.current) {
      carouselContainerRef.current.scrollBy({ left: 100, behavior: "smooth" });
      setCurrentTestimonial((current) => current + 1);
    }
  };

  const scrollLeft = () => {
    if (carouselContainerRef.current) {
      carouselContainerRef.current.scrollBy({ left: -100, behavior: "smooth" });
      setCurrentTestimonial((current) => current - 1);
    }
  };

  return (
    <section className="relative side-margin my-16 md:my-24 flex flex-col gap-8">
      <Subtitle subtitle="Testimonials" classStyling="justify-center" />
      <div className="w-full h-[2px] bg-zinc-800" />
      <div
        ref={carouselContainerRef}
        className="flex items-center gap-8 overflow-x-scroll carousel-container"
      >
        {testimodialsData.map((testimonial, idx) => (
          <TestimonialCard
            key={idx}
            testimonial={testimonial.testimonial}
            username={testimonial.username}
            userRole={testimonial.userRole}
            userCompany={testimonial.userCompany}
            tags={testimonial.tags}
          />
        ))}
      </div>
      <div className="absolute bottom-2 left-0 hidden md:grid gap-1 text-center text-sm">
        <div className="flex gap-4">
          <button
            disabled={currentTestimonial > 1 ? false : true}
            onClick={scrollLeft}
          >
            <ArrowLeft />
          </button>
          <button
            disabled={
              currentTestimonial < testimodialsData.length ? false : true
            }
            onClick={scrollRight}
          >
            <ArrowRight />
          </button>
        </div>
        <span>
          {currentTestimonial}/{testimodialsData.length}
        </span>
      </div>
    </section>
  );
};

export default Testimonial;
