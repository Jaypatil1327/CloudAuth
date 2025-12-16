import { createContext, useContext, useEffect, useState } from "react";

export const ThemeContext = createContext(null);
export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("context is null");
  }
  return ctx;
};

function setThemeInRoot(arg, setTheme) {
  document.querySelector("html").className = arg;
  localStorage.setItem("theme", arg);
  setTheme(arg);
}
export function GlobalThemeContext({ children }) {
  const [theme, setTheme] = useState(null);

  function changeTheme() {
    setThemeInRoot(theme === "dark" ? "light" : "dark", setTheme);
  }
  useEffect(() => {
    const isPresentInLocalStorage = localStorage.getItem("theme");
    if (isPresentInLocalStorage) {
      setThemeInRoot(isPresentInLocalStorage, setTheme);
    } else {
      const isDark = window.matchMedia("(prefers-color-scheme: dark)");
      setThemeInRoot(isDark ? "dark" : "light", setTheme);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ changeTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
}
