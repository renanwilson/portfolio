import DarkModeToggle from "react-dark-mode-toggle";
import {
  useDarkThemeContext,
  useWithDarkThemeContext,
} from "../../hocs/WithDarkThemeContext";

export const DarkToggleTheme = () => {
  const { darkTheme } = useDarkThemeContext();
  const { changeTheme } = useWithDarkThemeContext();
  return (
    <DarkModeToggle onChange={changeTheme} checked={darkTheme === "dark"} />
  );
};
