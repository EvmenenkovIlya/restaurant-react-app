interface SocialMediaImgProps {
  href: string;
  src: string;
}

export const SocialMediaImg = (props: SocialMediaImgProps) => {
  return (
    <a href={props.href}>
      <img src={props.src} alt="" />
    </a>
  );
};
