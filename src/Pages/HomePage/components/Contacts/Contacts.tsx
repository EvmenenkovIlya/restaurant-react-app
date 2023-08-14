import './Contacts.scss';

export const Contacts = () => {
    return (
        <div className="contacts-container">
    <div className="contacts /*computer-only*/">
      <div className="contact-item">
        <img src="./assets/email-icon.svg" alt="" />
        <a href="mailto:">info@youremail.com</a>
      </div>
      <div className="hr"></div>
      <div className="contact-item">
        <img src="./assets/call-icon.svg" alt="" />
        <a href="tel:+">+880 321 655 9985</a>
      </div>
    </div>
  </div>
    )
}