import { Card } from "../Card/Card";
import { FOR_CONTACT } from "./messages";
import "./ForContact.style.scss";
import { AiFillLinkedin } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const LinkForLinkedIn = (
  <a href="https://www.linkedin.com/in/renan-alves-a23104194">
    {FOR_CONTACT.LINKEDIN}
  </a>
);
const LinkForWhatsapp = (
  <a href="https://wa.me/11967524031">{FOR_CONTACT.WHATSAPP}</a>
);
const LinkForEmail = (
  <a href="mailto:renan.alves.ra16.com?">{FOR_CONTACT.EMAIL}</a>
);

export function ForContact() {
  return (
    <div className="forContact-container">
      <Card TITLE={LinkForLinkedIn} ICON={<AiFillLinkedin />} CONTACT />
      <Card TITLE={LinkForWhatsapp} ICON={<BsWhatsapp />} CONTACT />
      <Card TITLE={LinkForEmail} ICON={<AiOutlineMail />} CONTACT />
    </div>
  );
}
