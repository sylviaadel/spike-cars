import { createContext, useReducer, useContext } from "react";
import carsReducer from "./carsReducer";

const Context = createContext(null);
export function CarsProvider({ children }) {
  const [cars, dispatch] = useReducer(carsReducer, []);

  const value = { cars, dispatch };
  return <Context.Provider value={value}>{children}</Context.Provider>;
}
export function useCars() {
  const context = useContext(Context);
  if (!context) throw new Error("useCars must be used in CrasProvider");
  return context;
}
