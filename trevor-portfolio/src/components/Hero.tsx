import React from "react";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import heroBackgroundImage from "../assets/blackCircuit.avif";
// import heroBackgroundImage from "../assets/futureRing.webp";
// import heroBackgroundImage from "../assets/futureTunnel.avif";
// import heroBackgroundImage from "../assets/hero-background.jpg";
import githubLogo from "../assets/hero-images/github-logo.png";
import linkedinLogo from "../assets/hero-images/linkedin-logo.png";
import EmailIcon from "@mui/icons-material/Email";

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
          <IconButton
            href="https://github.com/trevormee"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="hero-icon-button"
          >
            <img src={githubLogo} alt="GitHub" className="button-logo" />
          </IconButton>

          <IconButton
            href="https://www.linkedin.com/in/trevormee/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="hero-icon-button"
          >
            <img src={linkedinLogo} alt="LinkedIn" className="button-logo" />
          </IconButton>

          <IconButton
            href="mailto:trevormee11@gmail.com"
            aria-label="Email Trevor"
          >
            <EmailIcon sx={{ color: "white", fontSize: 40 }} />
          </IconButton>
        </Stack>
      </div>
    </section>
  );
}
