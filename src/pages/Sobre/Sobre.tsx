import React from "react";
import { Header } from "../../components/Header/Header";
import { useClassNameWithThemeContext } from "../../context/DarkThemeContext";
import "./styles.scss";
import { AboutMe } from "../../components/AboutMe/AboutMe";

export function Sobre() {
  const CONTAINER_ABOUT = useClassNameWithThemeContext(
    "container-about",
    "container-about-dark"
  );
  return (
    <div className={CONTAINER_ABOUT}>
      <Header />
      <AboutMe />
    </div>
  );
}
