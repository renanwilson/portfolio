import React from "react";
import { Header } from "../../components/Header/Header";
import { Continue } from "../../components/AboutMe/Continuacao/Continue";
import { Intro } from "../../components/AboutMe/introducao/Intro";
import { Closure } from "../../components/AboutMe/Fechamento/Closure";

export function Sobre() {
  return (
    <>
      <Header />
      <Intro />
      <Continue />
      <Closure />
    </>
  );
}
