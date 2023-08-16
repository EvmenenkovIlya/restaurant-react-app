import "./HowItWorks.scss";
import { StepItem } from "./components/StepItem";
import stepOne from "./assets/step-one.png";
import stepTwo from "./assets/step-two.png";
import stepThree from "./assets/step-three.png";
import steps from "./assets/steps.svg";

export const HowItWorks = () => {
  return (
    <section id="how-it-works">
      <h2>How it works</h2>
      <p className="text-center">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        <br />
        industry. Lorem Ipsum has been the industry
      </p>
      <img src={steps} className="computer-only" alt="steps" />
      <div className="steps-container">
        <StepItem
          header="Order Now"
          src={stepOne}
          text="Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum
            has been the industry"
        />
        <StepItem
          header="Get Delivery"
          src={stepTwo}
          text="Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum
            has been the industry"
        />
        <StepItem
          header="Payment"
          src={stepThree}
          text="Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum
            has been the industry"
        />
      </div>
    </section>
  );
};
