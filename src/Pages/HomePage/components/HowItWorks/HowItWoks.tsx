import "./HowItWorks.scss";

export const HowItWorks = () => {
  return (

<section id="how-it-works">
      <h2>How it works</h2>
      <p className="text-center">
        Lorem Ipsum is simply dummy text of the printing and typesetting<br />
        industry. Lorem Ipsum has been the industry
      </p>
      <img src="./assets/steps.svg" className="computer-only" alt="steps"/>
      <div className="steps-container">
        <div className="step-item">
          <h3>Order Now</h3>
          <img src="./assets/step-one.png" alt="" className="mobile-only" />
          <p className="text-center">
            Lorem Ipsum is simply dummy text of the<br />
            printing and typesetting industry. Lorem Ipsum<br />
            has been the industry
          </p>
        </div>
        <div className="step-item">
          <h3>Get Delivery</h3>
          <img src="./assets/step-two.png" alt="" className="mobile-only" />
          <p className="text-center">
            Lorem Ipsum is simply dummy text of the<br />
            printing and typesetting industry. Lorem Ipsum<br />
            has been the industry
          </p>
        </div>
        <div className="step-item">
          <h3>Payment</h3>
          <img src="./assets/step-three.png" alt="" className="mobile-only" />
          <p className="text-center">
            Lorem Ipsum is simply dummy text of the<br />
            printing and typesetting industry. Lorem Ipsum<br />
            has been the industry
          </p>
        </div>
      </div>
    </section>)}