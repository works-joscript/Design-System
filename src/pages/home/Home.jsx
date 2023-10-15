import React from "react";
import "./home.css";
// creating and starting by ashraf
const Home = () => {
  return (
    <section className="home-container">
      <div>
        <p className="head-hent">Figma UI kit + Design System</p>
        <a href="/" className="head-link-info">
          The all-in-one UI kit and Design System for Figma
        </a>
        <p className="head-description">
          Supercharge your design workflow, kick-start your project faster, and
          level up your process.
        </p>
        <div className="links-btn">
          <button className="active">buy nucleus UI plus </button>
          <button className="preview">Preview in Figma</button>
        </div>
      </div>
    </section>
  );
};

export default Home;
