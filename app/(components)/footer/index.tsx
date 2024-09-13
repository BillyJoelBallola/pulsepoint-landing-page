"use client";

import React from "react";
import FooterLinks from "./FooterLinks";
import { ArrowUp, ArrowUpRight } from "lucide-react";

const companyLinks = [
  {
    href: "/",
    label: "About",
  },
  {
    href: "/",
    label: "Our Team",
  },
  {
    href: "/",
    label: "Careers",
  },
  {
    href: "/",
    label: "Contact",
  },
  {
    href: "/",
    label: "Partnership",
  },
];

const servicesLinks = [
  {
    href: "/",
    label: "Strategy",
  },
  {
    href: "/",
    label: "Creative Content",
  },
  {
    href: "/",
    label: "Web Development",
  },
  {
    href: "/",
    label: "Product Design",
  },
  {
    href: "/",
    label: "Digital Marketing",
  },
];

const supportLinks = [
  {
    href: "/",
    label: "Help & Support",
  },
  {
    href: "/",
    label: "Warrant",
  },
  {
    href: "/",
    label: "FAQ",
  },
  {
    href: "/",
    label: "Policies",
  },
  {
    href: "/",
    label: "Feedback",
  },
];

const Footer = () => {
  return (
    <footer className="side-margin grid">
      <div className="flex flex-col md:flex-row items-center gap-8 py-10">
        <div className="flex-1 grid gap-8 grid-cols-1 text-center md:text-left md:grid-cols-2  lg:grid-cols-4">
          <div className="flex flex-col">
            <span className="text-zinc-500">2096 Los Angeles St.</span>
            <span className="text-2xl">California</span>
          </div>
          <FooterLinks title="Company" links={companyLinks} />
          <FooterLinks title="Services" links={servicesLinks} />
          <FooterLinks title="Support" links={supportLinks} />
        </div>
        <form
          onSubmit={() => {}}
          className="flex-1 md:flex-none w-[300px] grid gap-4 "
        >
          <h4 className="text-3xl">Subscribe to Our Newsletter?</h4>
          <div className="flex py-2 border-b border-zinc-800">
            <input
              type="text"
              placeholder="username@example.com"
              className="text-zinc-500 bg-transparent flex-1 outline-0"
            />
            <button className="flex items-center gap-2 ">
              <span>SUBMIT</span>
              <ArrowUpRight />
            </button>
          </div>
          <span className="text-xs text-zinc-500">
            Stay updated. No span ever.
          </span>
        </form>
      </div>
      <div className="py-8 flex flex-col gap-4 md:flex-row items-center justify-between border-t border-zinc-800 text-zinc-500">
        <span>©️2024 PulsePoint</span>
        <div className="flex gap-4 items-center">
          <a href="/">Privacy policy</a>
          <a href="/">Terms & conditions</a>
        </div>
        <a href="/#hero" className="flex gap-2 mt-4">
          <ArrowUp />
          <span>Back to top</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
