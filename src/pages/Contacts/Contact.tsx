import { ForContact } from "../../components/ForContact/ForContact";
import { Header } from "../../components/Header/Header";
import { useClassNameWithThemeContext } from "../../hocs/WithDarkThemeContext";
import "./styles.scss";

export function Contact() {
  const CONTACT_CONTAINER = useClassNameWithThemeContext(
    "contact-container",
    "contact-container-dark"
  );
  return (
    <div className={CONTACT_CONTAINER}>
      <Header />
      <ForContact />
    </div>
  );
}
