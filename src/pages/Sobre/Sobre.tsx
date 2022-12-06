import React from "react";
import { Header } from "../../components/Header/Header";
import { Continue } from "../../components/AboutMe/Continuacao/Continue";
import { Intro } from "../../components/AboutMe/introducao/Intro";
import { Closure } from "../../components/AboutMe/Fechamento/Closure";
import { useClassNameWithThemeContext } from "../../context/DarkThemeContext";
import "./styles.scss";

export function Sobre() {
  const CONTAINER_ABOUT = useClassNameWithThemeContext(
    "container-about",
    "container-about-dark"
  );
  return (
    <div className={CONTAINER_ABOUT}>
      <Header />
      <Intro />
      <Continue />
      <Closure />
    </div>
  );
}
