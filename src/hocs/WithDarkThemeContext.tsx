import React, {
  createContext,
  Dispatch,
  ReactElement,
  SetStateAction,
  useContext,
  useState,
} from "react";
import DarkModeToggle from "react-dark-mode-toggle";

type WithDarkThemeContextProps = {
  setDarkTheme: Dispatch<SetStateAction<string>>;
  darkTheme: string;
};
type WithDarkThemeProviderProps = {
  children: ReactElement;
};
const defaultProps: WithDarkThemeContextProps = {
  darkTheme: "light",
  setDarkTheme: () => "",
};

export const WithDarkThemeContext = createContext(defaultProps);

export function WithDarkThemeProvider({
  children,
}: WithDarkThemeProviderProps) {
  const [darkTheme, setDarkTheme] = useState(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      return "dark";
    } else {
      return "light";
    }
  });
  console.log(darkTheme);
  return (
    <WithDarkThemeContext.Provider
      value={{ setDarkTheme: setDarkTheme, darkTheme: darkTheme }}
    >
      {children}
    </WithDarkThemeContext.Provider>
  );
}
export const useDarkThemeContext = () => useContext(WithDarkThemeContext);

export const useWithDarkThemeContext = () => {
  const { darkTheme, setDarkTheme } = useDarkThemeContext();

  function changeTheme() {
    if (darkTheme === "dark") {
      setDarkTheme("light");
      localStorage.setItem("theme", "light");
    }
    if (darkTheme === "light") {
      setDarkTheme("dark");
      localStorage.setItem("theme", "dark");
    }
  }

  return {
    changeTheme,
  };
};
export const useClassNameWithThemeContext = (l: string, d: string) => {
  const { darkTheme } = useDarkThemeContext();

  return darkTheme === "light" ? l : d;
};

export const DarkToggleTheme = () => {
  const { darkTheme } = useDarkThemeContext();
  const { changeTheme } = useWithDarkThemeContext();
  return (
    <DarkModeToggle onChange={changeTheme} checked={darkTheme === "dark"} />
  );
};
