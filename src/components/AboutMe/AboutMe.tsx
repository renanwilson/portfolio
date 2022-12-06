import React from "react";
import { TextsContainer } from "../TextsContainers/TextsContainer";
import { TitlesContainer } from "../TitlesContainer/TitlesContainer";
import { ABOUT_ME } from "./messages";

export function AboutMe() {
  return (
    <div>
      <TitlesContainer Title={ABOUT_ME.TITLE} />
      <TextsContainer Text={ABOUT_ME.TEXT} />
      <TitlesContainer Title={ABOUT_ME.CONTINUE_MESSAGES.TITLE} Left />
      <TextsContainer Text={ABOUT_ME.CONTINUE_MESSAGES.TEXT} />
      <TitlesContainer Title={ABOUT_ME.CLOSURE_MESSAGES.TITLE} />
      <TextsContainer Text={ABOUT_ME.CLOSURE_MESSAGES.TEXT} />
    </div>
  );
}
