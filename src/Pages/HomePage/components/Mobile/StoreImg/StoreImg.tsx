interface StoreImgProps {
  url: string;
  src: string;
  alt: string;
}

export const StoreImg = (props: StoreImgProps) => {
  return (
    <a href={props.url}>
      <img src={props.src} alt={props.alt} />
    </a>
  );
};
