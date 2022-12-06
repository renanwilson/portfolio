import { useClassNameWithThemeContext } from "../../context/DarkThemeContext";
import "./TextsContainer.style.scss";

export type TextsContainerProps = {
  Text: string;
};

export function TextsContainer(props: TextsContainerProps) {
  return (
    <div
      className={useClassNameWithThemeContext(
        "container-TextsContainer",
        "container-TextsContainer-dark"
      )}
    >
      <h1> {props.Text} </h1>
    </div>
  );
}
