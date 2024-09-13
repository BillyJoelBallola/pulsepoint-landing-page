"use client";

import { createContext, ReactNode, useReducer } from "react";

type StateType = {
  isNavbarOpen: boolean;
};

type ActionType = { type: "toggleNavbar" };

type ContextType = {
  state: StateType;
  dispatch: React.Dispatch<ActionType>;
};

const initialState: StateType = {
  isNavbarOpen: false,
};

export const NavbarContext = createContext<ContextType | null>(null);

const reducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case "toggleNavbar":
      return { ...state, isNavbarOpen: !state.isNavbarOpen };
    default:
      return state;
  }
};

export const NavbarContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <NavbarContext.Provider value={{ state, dispatch }}>
      {children}
    </NavbarContext.Provider>
  );
};
