import React from "react";
import { Fortext } from "../../ForTexts/ForTexts";
import { ForTitle } from "../../ForTitle/ForTitle";
import { CONTINUE_MESSAGES } from "./messages";

export function Continue() {
  return (
    <>
      <ForTitle TITLE={CONTINUE_MESSAGES.TITLE} left />
      <Fortext Texto={CONTINUE_MESSAGES.TEXT} />
    </>
  );
}
