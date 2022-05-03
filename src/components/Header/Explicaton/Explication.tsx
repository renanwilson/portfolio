import React from "react";
import { EXPLICATION_MESSAGES } from "./messages";
import "./explication.style.scss";

export function Explication() {
  return (
    <div className="explication">
      <div className="container-explication">
        <h1> {EXPLICATION_MESSAGES.SOBRE}</h1>
      </div>
    </div>
  );
}
