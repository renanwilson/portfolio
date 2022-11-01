import React, {
  createContext,
  Dispatch,
  ReactElement,
  SetStateAction,
  useContext,
  useState,
} from "react";

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
export const useWithDarkThemeContext = () => {
  const { darkTheme, setDarkTheme } = useContext(WithDarkThemeContext);

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
  const { darkTheme } = useContext(WithDarkThemeContext);

  return darkTheme === "light" ? l : d;
};
