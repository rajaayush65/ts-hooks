import { createContext } from "react";

const initialState = {
  first: "Aayush",
  last: "Raj",
};

export type UserState = typeof initialState;

const context = createContext<typeof initialState>(initialState);

export default context;
