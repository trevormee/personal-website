import { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import heroBackgroundImage from "../assets/blackCircuit.avif";
// import heroBackgroundImage from "../assets/futureRing.webp";
// import heroBackgroundImage from "../assets/futureTunnel.avif";
// import heroBackgroundImage from "../assets/hero-background.jpg";
import githubLogo from "../assets/hero-images/github-logo.png";
import linkedinLogo from "../assets/hero-images/linkedin-logo.png";
import EmailIcon from "@mui/icons-material/Email";

const nameText = "Trevor Mee";
const titleText = "Software Engineer | M.S. Analytics Candidate";

export default function Hero() {
  const [displayedName, setDisplayedName] = useState("");
  const [displayedTitle, setDisplayedTitle] = useState("");
  const [isNameDone, setIsNameDone] = useState(false);
  const [isTitleDone, setIsTitleDone] = useState(false);

  useEffect(() => {
    let currIndex = 0;

    const nameInterval = window.setInterval(() => {
      setDisplayedName(nameText.slice(0, currIndex + 1));
      currIndex++;

      if (currIndex === nameText.length) {
        window.clearInterval(nameInterval);
        setIsNameDone(true);
      }
    }, 90);

    return () => window.clearInterval(nameInterval);
  }, []);

  useEffect(() => {
    if (!isNameDone) return;

    let currIndex = 0;

    const titleInterval = window.setInterval(() => {
      setDisplayedTitle(titleText.slice(0, currIndex + 1));
      currIndex++;

      if (currIndex === titleText.length) {
        window.clearInterval(titleInterval);
        setIsTitleDone(true);
      }
    }, 45);

    return () => window.clearInterval(titleInterval);
  }, [isNameDone]);

  return (
    <section
      id="hero"
      className="hero-section"
      style={{ backgroundImage: `url(${heroBackgroundImage})` }}
    >
      <div className="hero-content">
        <h1 className="hero-title">
          {displayedName}
          {!isNameDone && <span className="typing-cursor">|</span>}
        </h1>

        <h2 className="hero-subtitle">
          {displayedTitle}
          {isNameDone && !isTitleDone && (
            <span className="typing-cursor">|</span>
          )}
          {isTitleDone && <span className="typing-cursor"></span>}
        </h2>

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
            <EmailIcon
              sx={{ color: "white", fontSize: 40 }}
              className="button-logo"
            />
          </IconButton>
        </Stack>
      </div>
    </section>
  );
}
