import React from "react";
import { AboutProject } from "../../components/AboutProject/AboutProject";
import { Courses } from "../../components/Courses/Courses";
import { Header } from "../../components/Header/Header";
import { useClassNameWithThemeContext } from "../../hocs/WithDarkThemeContext";
import "./styles.scss";

export function Home() {
  return (
    <div className={useClassNameWithThemeContext("Home", "Home-dark")}>
      <Header />
      <AboutProject />
      <Courses />
    </div>
  );
}
