"use client";

import Image from "next/image";
import Logo from "@/app/assets/pulsepoint-logo.png";
import { AlignJustify, X } from "lucide-react";
import useNavbar from "@/app/hooks/useNavbar";
import { useEffect, useState } from "react";

const navLink = [
  {
    label: "Home",
    href: "/#home",
  },
  {
    label: "About",
    href: "/#about",
  },
  {
    label: "Services",
    href: "/#services",
  },
  {
    label: "Support",
    href: "/#support",
  },
];

function Navbar() {
  const { state, dispatch } = useNavbar();
  const [screen, setScreen] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScreen(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-40 ${
        screen > 0 && "bg-black/60 backdrop-blur-sm shadow-md"
      }`}
    >
      {/* web menu */}
      <div className="side-margin flex items-center justify-between py-6">
        <div className="flex gap-4 items-center">
          <Image src={Logo} alt="Logo" width={20} height={40} />
          <span className="font-semibold text-2xl hidden md:block">
            PulsePoint
          </span>
        </div>
        <ul className="items-center gap-4 hidden md:flex">
          {navLink.map((link, idx) => (
            <li key={idx}>
              <a
                href={link.href}
                className={`${
                  link.label.includes("Home")
                    ? "text-zinc-100"
                    : "text-zinc-400"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <button className="hidden md:block p-2 px-4 border hover:bg-white hover:text-[#212121] duration-200">
          Get in Touch
        </button>
        <button
          onClick={() => dispatch({ type: "toggleNavbar" })}
          className="block md:hidden"
        >
          <AlignJustify />
        </button>
      </div>

      {/* mobile menu */}
      <div
        className={`p-8 h-screen absolute ${
          state.isNavbarOpen ? "-top-[1000px]" : "top-0"
        } duration-300 right-0 left-0 flex flex-col gap-4 justify-between md:hidden bg-[#111111] backdrop-blur-sm`}
      >
        <div className="flex items-center justify-between">
          <Image src={Logo} alt="Logo" width={20} height={40} />
          <button onClick={() => dispatch({ type: "toggleNavbar" })}>
            <X />
          </button>
        </div>
        <ul className="flex flex-col items-center justify-center gap-8">
          {navLink.map((link, idx) => (
            <li key={idx}>
              <a
                href={link.href}
                className={`text-2xl ${
                  link.label.includes("Home")
                    ? "text-zinc-100"
                    : "text-zinc-400"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <button className="p-2 px-4 border hover:bg-white hover:text-[#212121] duration-200">
          Get in Touch
        </button>
      </div>
    </div>
  );
}

export default Navbar;
