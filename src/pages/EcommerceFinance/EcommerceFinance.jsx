import "./EcommerceFinance.css";

const EcommerceFinance = () => {
  return (
    <section className="ecommerce">
      <div className="info-head">
        <h1>
          Unpack over 1000 components and variants and 500+ mobile screens (with
          9 themes from Event, E-commerce, Finance, NFT, etc.).
        </h1>
        <p>
          Our mission is to be the most exhaustive building blocks you need at
          every project stage. So you will never buy another UI kit.
        </p>
      </div>
      <div className="boxes">
        <div className="box">
          <p className="number">200+</p>
          <span className="title">Global styles</span>
          <p className="discription">
            Ready-to-use and practical color, typography and effects styles.
          </p>
        </div>
        <div className="box">
          <p className="number">1000+</p>
          <span className="title">Components and variants</span>
          <p className="discription">
            A massive collection of UI Components that combines the best
            practices out there.
          </p>
        </div>
        <div className="box">
          <p className="number">120+</p>
          <span className="title">Mobile screen examples</span>
          <p className="discription">
            A well-crafted 120+ ready-to-go & easy-to-customize mobile screen
            examples.
          </p>
        </div>
        <div className="box">
          <p className="number">550+</p>
          <span className="title">Media assets</span>
          <p className="discription">
            Includes pixel-perfect icons, flags, logos and more.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EcommerceFinance;
