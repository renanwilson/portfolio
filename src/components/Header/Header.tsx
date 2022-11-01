import { Explication } from "./Explicaton/Explication";
import { HEADER_MESSAGES } from "./messages";
import "./style.scss";
import eu from "./utils/img/eu.jpg";
import {
  useClassNameWithThemeContext,
  useWithDarkThemeContext,
} from "../../hocs/WithDarkThemeContext";

export function Header() {
  const { changeTheme } = useWithDarkThemeContext();
  const DarkTheme = () => {
    changeTheme();
  };
  return (
    <>
      <div
        className={useClassNameWithThemeContext(
          "container-header",
          "container-header-dark"
        )}
      >
        <button onClick={DarkTheme}></button>
        <a href="/">
          <img src={eu} alt="Está aqui é minha foto" />
        </a>
        <h1>
          <a href="/sobre"> {HEADER_MESSAGES.SOBRE} </a>
        </h1>
        <h1>
          <a href="/contact">{HEADER_MESSAGES.CONTATOS}</a>
        </h1>
        <h1>
          <a href={HEADER_MESSAGES.LINKS.LINK_GIT}>{HEADER_MESSAGES.GIT}</a>
        </h1>
      </div>
      <Explication />
    </>
  );
}
