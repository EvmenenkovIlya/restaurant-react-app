import "./StepItem.scss";

interface StepItemProps {
  header: string;
  src: string;
  text: string;
}

export const StepItem = (props: StepItemProps) => {
  return (
    <div className="step-item">
      <h3>{props.header}</h3>
      <img src={props.src} alt="" className="mobile-only" />
      <p className="text-center">{props.text}</p>
    </div>
  );
};
