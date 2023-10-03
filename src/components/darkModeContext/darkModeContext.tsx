import { createContext, PropsWithChildren } from "react";
import { DarkModeProviderValue } from "./types";

export const DarkModeContext = createContext<DarkModeProviderValue>({
  isDarkTheme: true,
  toggleTheme: () => {},
});

interface DarkModeProviderProps {
  value: DarkModeProviderValue;
}

export function DarkModeProvider({
  children,
  value,
}: PropsWithChildren<DarkModeProviderProps>) {
  return (
    <DarkModeContext.Provider value={value}>
      {children}
    </DarkModeContext.Provider>
  );
}
