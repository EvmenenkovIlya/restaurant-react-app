import "./Target.scss";

export const Target = () => {
  return (
    <section id="target">
      <div className="computer-only">
        <img src="./assets/delivery-man.png" alt="delivery-pages" />
      </div>
      <div className="target-info">
        <div>
          <button className="our-target">Our Target</button>
        </div>
        <h2>
          We Earn Your Trust and are
          <br />
          Diligent in Your Case
        </h2>
        <p>
          When an unknown printer took a galley of type and scrambled it to
          <br />
          make a type specimen book. It has survived not only five centuries,
          <br />
          but also the leap into electronic typesetting.
        </p>
        <p>
          It was popularised in the 1960s with the release of Letraset sheets
          <br />
          containing Lorem Ipsum passages, and more recently with desktop
          <br />
          publishing software like Aldus PageMaker including versions of Lorem
          <br />
          Ipsum.
        </p>
        <div>
          <button className="order-now">Order Now</button>
        </div>
      </div>
    </section>
  );
};
