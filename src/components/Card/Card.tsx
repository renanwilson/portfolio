import React from "react";
import "./Card.style.scss";

export type CardProps = {
  TITLE: any;
  TEXT?: any;
  ICON?: any;
  CONTACT?: boolean;
};


export function Card(props: CardProps) {
  return props.CONTACT? (
    <div className="card-container-contact">
      <div>
        <h1>{props.TITLE}</h1>
      </div>
      <h2>{props.ICON}</h2>
    </div>
  ) : (
    <div className="card-container">
      <div>
        <h1>
          {props.TITLE} {props.ICON}
        </h1>
      </div>
      <h2>{props.TEXT}</h2>
    </div>
  );
}
