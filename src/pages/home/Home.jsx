import React from "react";
import "./home.css";

const Home = () => {
  return (
    <section className="home-container">
      <div className="title">
        <p className="head-hent">Figma UI kit + Design System</p>
        <a href="https://nucleusui.gumroad.com/l/nucleus-ui-plus-all-in-one-figma-ui-kit-design-system" className="head-link-info">
          <p>The all-in-one UI kit and Design System for Figma</p>
        </a>
        <p className="head-description">
          Supercharge your design workflow, kick-start your project faster, and
          level up your process.
        </p>
        <div className="links-btn">
          <a href="https://nucleusui.gumroad.com/l/nucleus-ui-plus-all-in-one-figma-ui-kit-design-system?source=nucleus-lite"><button className="active">buy nucleus UI plus </button></a>
          <a href="https://www.figma.com/file/fsHfxhMwTTWFSYXQsP7UIj/Nucleus-UI-PLUS_-All-in-one-Figma-UI-kit-%2B-Design-system-starter-v1.0?node-id=770%3A5839&fuid=1188826160154781518"><button className="preview">Preview in Figma</button></a>
        </div>
      </div>
    </section>
  );
};

export default Home;
