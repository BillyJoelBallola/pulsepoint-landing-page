"use client";

import { useContext } from "react";
import { NavbarContext } from "../context/NavbarContext";

const useNavbar = () => {
  const context = useContext(NavbarContext);

  if (!context) {
    throw new Error("useCounter must be used within a CounterProvider");
  }

  return context;
};

export default useNavbar;
