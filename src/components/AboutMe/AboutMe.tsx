import React from "react";
import { Fortext } from "../ForTexts/ForTexts";
import { ForTitle } from "../ForTitle/ForTitle";
import { ABOUT_ME } from "./messages";

export function AboutMe() {
  return (
    <div className="onMe">
      <ForTitle TITLE={ABOUT_ME.TITLE} />
      <Fortext Texto={ABOUT_ME.TEXT} />
      <ForTitle TITLE={ABOUT_ME.CONTINUE_MESSAGES.TITLE} left />
      <Fortext Texto={ABOUT_ME.CONTINUE_MESSAGES.TEXT} />
      <ForTitle TITLE={ABOUT_ME.CLOSURE_MESSAGES.TITLE} />
      <Fortext Texto={ABOUT_ME.CLOSURE_MESSAGES.TEXT} />
    </div>
  );
}
