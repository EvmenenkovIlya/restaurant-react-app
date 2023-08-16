interface ContactItemProps {
  src: string;
  href: string;
  text: string;
}

export const ContactItem = (props: ContactItemProps) => {
  return (
    <div className="contact-item">
      <img src={props.src} alt=""/>
      <a href={props.href}>{props.text}</a>
    </div>
  );
};
