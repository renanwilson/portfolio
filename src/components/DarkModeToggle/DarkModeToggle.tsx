import DarkModeToggle from "react-dark-mode-toggle";
import {
  useDarkThemeContext,
  useWithDarkThemeContext,
} from "../../context/DarkThemeContext";

export const DarkToggleTheme = () => {
  const { darkTheme } = useDarkThemeContext();
  const { changeTheme } = useWithDarkThemeContext();
  return (
    <DarkModeToggle onChange={changeTheme} checked={darkTheme === "dark"} />
  );
};
