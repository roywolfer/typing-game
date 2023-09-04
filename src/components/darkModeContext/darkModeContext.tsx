import { createContext, ReactNode } from "react";
import { DarkModeProviderValue } from "./types";

export const DarkModeContext = createContext<DarkModeProviderValue>({
  isDarkTheme: true,
  toggleTheme: () => {},
});

interface DarkModeProviderProps {
  children: ReactNode;
  value: DarkModeProviderValue;
}

export function DarkModeProvider({ children, value }: DarkModeProviderProps) {
  return (
    <DarkModeContext.Provider value={value}>
      {children}
    </DarkModeContext.Provider>
  );
}
