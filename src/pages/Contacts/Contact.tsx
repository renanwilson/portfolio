import { ForContact } from "../../components/Contacts/Contacts";
import { Header } from "../../components/Header/Header";
import { useClassNameWithThemeContext } from "../../context/DarkThemeContext";
import "./styles.scss";

export function Contact() {
  const CONTACT_CONTAINER = useClassNameWithThemeContext(
    "contacts-container",
    "contacts-container-dark"
  );
  return (
    <div className={CONTACT_CONTAINER}>
      <Header />
      <ForContact />
    </div>
  );
}
