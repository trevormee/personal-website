import React from "react";
import heroBackgroundImage from "../assets/hero-background-1.jpg";

export default function Hero() {
  return (
    <section
      id="hero"
      className="hero-section"
      style={{ backgroundImage: `url(${heroBackgroundImage})` }}
    >
      <div className="hero-content">
        <h1>Trevor Mee</h1>
        <h2>Software Engineer | M.S. Analytics Candidate</h2>
      </div>
    </section>
  );
}
