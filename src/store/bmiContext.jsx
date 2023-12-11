import { createContext } from "react";

export const bmiContext = createContext({
    bmiNumber: 0,
    setBmi: () => {},
    minIdealWeight: 0,
    setMinIdealWeight: () => {},
    maxIdealWeight: 0,
    setMaxIdealWeight: () => {},
})