import "./Dishes.scss";

export const Dishes = () => {
  return (
    <section id="dishes">
      <h2>Our Delicious Dish</h2>
      <p className="text-center">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        <br />
        industry. Lorem Ipsum has been the industry
      </p>
      <div className="cards-container"></div>
      <div className="pagination">
        <div className="circle btn arrow-left" /*onClick="getPages(-1)"*/>
          <img src="./assets/arrow-left.svg" alt="arrow-left" />
        </div>
        <div className="circle btn arrow-right" /*onClick="getPages(1)*/>
          <img src="./assets/arrow-right.svg" alt="arrow-left" />
        </div>
        <div className="circle btn active" /*onClick="getPageWithNumber()"*/>
          1
        </div>
        <div className="circle btn" /*onClick="getPageWithNumber()"*/>2</div>
        <div className="circle btn" /*onClick="getPageWithNumber()"*/>3</div>
        <div
          className="circle btn computer-only" /*onClick="getPageWithNumber()"*/
        >
          4
        </div>
        <div
          className="circle btn computer-only" /*onClick="getPageWithNumber()"*/
        >
          5
        </div>
      </div>
    </section>
  );
};
