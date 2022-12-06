import React from "react";
import { useClassNameWithThemeContext } from "../../context/DarkThemeContext";
import "./TitlesContainer.style.scss";

export type TitlesContainerProps = {
  Title: string;
  Left?: boolean;
};

export function TitlesContainer({ Title, Left }: TitlesContainerProps) {
  const CONTAINER_LEFT_CLASSNAME = useClassNameWithThemeContext(
    "container-forTitleLeft",
    "container-forTitleLeft-dark"
  );
  const CONTAINER_CLASSNAME = useClassNameWithThemeContext(
    "container-forTitle",
    "container-forTitle-dark"
  );
  const TITLE_CLASSNAME = useClassNameWithThemeContext(
    "forTitle",
    "forTitle-dark"
  );

  return Left ? (
    <div className={CONTAINER_LEFT_CLASSNAME}>
      <div className={TITLE_CLASSNAME}>
        <h1> {Title} </h1>
      </div>
    </div>
  ) : (
    <div className={CONTAINER_CLASSNAME}>
      <div className={TITLE_CLASSNAME}>
        <h1> {Title} </h1>
      </div>
    </div>
  );
}
