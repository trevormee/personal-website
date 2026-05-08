import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import heroBackgroundImage from "../assets/blackCircuit.avif";
// import heroBackgroundImage from "../assets/futureRing.webp";
// import heroBackgroundImage from "../assets/futureTunnel.avif";
// import heroBackgroundImage from "../assets/hero-background.jpg";
import githubLogo from "../assets/hero-images/github-logo.png";
import linkedinLogo from "../assets/hero-images/linkedin-logo.jpg";
import emailLogo from "../assets/hero-images/email-logo.webp";

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

        <Stack direction="row" spacing={2} className="hero-buttons">
          <Button
            variant="text"
            href="https://github.com/trevormee"
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<img src={githubLogo} alt="" className="button-logo" />}
          ></Button>

          <Button
            variant="text"
            href="https://www.linkedin.com/in/trevormee/"
            target="_blank"
            rel="noopener noreferrer"
            startIcon={
              <img src={linkedinLogo} alt="" className="button-logo" />
            }
          ></Button>
        </Stack>
      </div>
    </section>
  );
}
