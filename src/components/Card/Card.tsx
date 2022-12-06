import React from "react";
import { useClassNameWithThemeContext } from "../../context/DarkThemeContext";
import "./Card.style.scss";

export type CardProps = {
  TITLE: any;
  TEXT?: any;
  ICON?: any;
  CONTACT?: boolean;
};

export function Card(props: CardProps) {
  const classNameContainer = useClassNameWithThemeContext(
    "card-container",
    "card-container-dark"
  );
  const containerContact = useClassNameWithThemeContext(
    "card-container-contact",
    "card-container-contact-dark"
  );
  return props.CONTACT ? (
    <div className={containerContact}>
      <div>
        <h1>{props.TITLE}</h1>
      </div>
      <h2>{props.ICON}</h2>
    </div>
  ) : (
    <div className={classNameContainer}>
      <div>
        <h1>
          {props.TITLE} {props.ICON}
        </h1>
      </div>
      <h2>{props.TEXT}</h2>
    </div>
  );
}
