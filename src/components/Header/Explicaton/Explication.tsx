import React from "react";
import { EXPLICATION_MESSAGES } from "./messages";
import "./explication.style.scss";
import { useClassNameWithThemeContext } from "../../../context/DarkThemeContext";

export function Explication() {
  return (
    <div
      className={useClassNameWithThemeContext(
        "explication",
        "explication-dark"
      )}
    >
      <div
        className={useClassNameWithThemeContext(
          "container-explication",
          "container-explication-dark"
        )}
      >
        <h1> {EXPLICATION_MESSAGES.SOBRE}</h1>
      </div>
    </div>
  );
}
