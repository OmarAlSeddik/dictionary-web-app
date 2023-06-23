"use client";

import { createContext, useContext, useEffect, useState } from "react";

type ContextType = {
  darkTheme: boolean | undefined;
  toggleTheme: () => void;
  font: string | undefined;
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
  const [font, setFont] = useState<string | undefined>();

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

  useEffect(() => {
    if (font === undefined)
      "font" in localStorage ? setFont(localStorage.font) : setFont("sans");
    else {
      if (font == "sans") {
        document.body.classList.add("font-sans");
        document.body.classList.remove("font-serif");
        document.body.classList.remove("font-mono");
        localStorage.font = "sans";
      } else if (font == "serif") {
        document.body.classList.add("font-serif");
        document.body.classList.remove("font-sans");
        document.body.classList.remove("font-mono");
        localStorage.font = "serif";
      } else {
        document.body.classList.add("font-mono");
        document.body.classList.remove("font-sans");
        document.body.classList.remove("font-serif");
        localStorage.font = "mono";
      }
    }
  }, [font]);

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
