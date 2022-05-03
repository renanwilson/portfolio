import React from "react";
import { ForTitle } from "../../ForTitle/ForTitle";
import { ABOUT_ME } from "./messages";
import { Fortext } from "../../ForTexts/ForTexts";

export function Intro() {
  return (
    <div className="onMe">
      <ForTitle TITLE={ABOUT_ME.TITLE} />
      <Fortext Texto={ABOUT_ME.SOBRE_MIM} />
    </div>
  );
}
