import { useClassNameWithThemeContext } from "../../hocs/WithDarkThemeContext";
import "./ForText.style.scss";

export type FortextProps = {
  Texto: string;
};

export function Fortext(props: FortextProps) {
  return (
    <div
      className={useClassNameWithThemeContext(
        "container-ForText",
        "container-ForText-dark"
      )}
    >
      <h1> {props.Texto} </h1>
    </div>
  );
}
