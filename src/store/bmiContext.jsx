import { createContext } from "react";

export const bmiContext = createContext({
    bmiNumber: 0,
    setBmi: () => {},
})