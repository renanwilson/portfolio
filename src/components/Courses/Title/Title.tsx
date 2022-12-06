import React from "react";
import { useClassNameWithThemeContext } from "../../../context/DarkThemeContext";
import "./Title.style.scss";
export type TitleProps = {
  TITLE: string;
};

export function Title(props: TitleProps) {
  const CONTAINER_CLASSNAME = useClassNameWithThemeContext(
    "title-container",
    "title-container-dark"
  );

  return (
    <div className={CONTAINER_CLASSNAME}>
      <h1>{props.TITLE}</h1>
    </div>
  );
}
