import React from "react";
import { TextsContainer } from "../TextsContainers/TextsContainer";
import { TitlesContainer } from "../TitlesContainer/TitlesContainer";
import { ABOUT_PROJECT_MESSAGES } from "./messages";

export function AboutProject() {
  return (
    <>
      <TitlesContainer Title={ABOUT_PROJECT_MESSAGES.TITLE} />
      <TextsContainer Text={ABOUT_PROJECT_MESSAGES.TEXT} />
    </>
  );
}
  