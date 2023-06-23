"use client";

import { createContext, useContext, useEffect, useState } from "react";

type ContextType = {
  darkTheme: boolean | undefined;
  toggleTheme: () => void;
  font: string;
  changeFont: (newFont: string) => void;
};

const defaultState = {
  darkTheme: false,
  toggleTheme() {
    return;
  },
  font: "sans",
  changeFont() {
    return;
  },
};

const AppContext = createContext<ContextType>(defaultState);

type PropsType = {
  children: JSX.Element[] | JSX.Element;
};

export const AppContextProvider = ({ children }: PropsType) => {
  const [darkTheme, setDarkTheme] = useState<boolean | undefined>();
  const [font, setFont] = useState("sans");

  useEffect(() => {
    if (darkTheme === undefined)
      "theme" in localStorage
        ? setDarkTheme(localStorage.theme === "dark")
        : setDarkTheme(
            window.matchMedia("(prefers-color-scheme: dark)").matches
          );
    else {
      if (darkTheme) {
        document.documentElement.classList.add("dark");
        localStorage.theme = "dark";
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.theme = "light";
      }
    }
  }, [darkTheme]);

  const toggleTheme = () => {
    setDarkTheme((prev) => !prev);
  };

  const changeFont = (newFont: string) => {
    setFont(newFont);
  };

  return (
    <AppContext.Provider value={{ darkTheme, toggleTheme, font, changeFont }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
