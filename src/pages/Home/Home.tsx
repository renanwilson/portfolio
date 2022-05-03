import React from "react";
import { AboutProject } from "../../components/AboutProject/AboutProject";
import { Courses } from "../../components/Courses/Courses";
import { Header } from "../../components/Header/Header";

export function Home() {
  return (
    <>
      <Header />
      <AboutProject />
      <Courses />
    </>
  );
}
