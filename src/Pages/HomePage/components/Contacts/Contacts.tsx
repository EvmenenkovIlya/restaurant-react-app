import "./Contacts.scss";
import call from "./assets/call-icon.svg";
import email from "./assets/email-icon.svg";
import { ContactItem } from "./components/ContactItem/ContactItem";

export const Contacts = () => {
  return (
    <div className="contacts-container">
      <div className="contacts">
        <ContactItem src={email} href="mailto:info@youremail.com" text="info@youremail.com" />      
        <div className="hr"></div>
        <ContactItem src={call} href="tel:+8803216559985" text="+880 321 655 9985" />
      </div>
    </div>
  );
};
