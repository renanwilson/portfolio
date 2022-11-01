import React from "react";
import { useClassNameWithThemeContext } from "../../hocs/WithDarkThemeContext";
import "./style.scss";

export type ForTitleProps = {
  TITLE: string;
  left?: boolean;
};

export function ForTitle({ TITLE, left }: ForTitleProps) {
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

  return left ? (
    <div className={CONTAINER_LEFT_CLASSNAME}>
      <div className={TITLE_CLASSNAME}>
        <h1> {TITLE} </h1>
      </div>
    </div>
  ) : (
    <div className={CONTAINER_CLASSNAME}>
      <div className={TITLE_CLASSNAME}>
        <h1> {TITLE} </h1>
      </div>
    </div>
  );
}
