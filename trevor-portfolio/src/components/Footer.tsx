import CopyrightIcon from "@mui/icons-material/Copyright";
import { Typography } from "@mui/material";

export default function Footer() {
  return (
    <footer id="footer" className="footer-section">
      <Typography className="footer-text">
        <CopyrightIcon className="footer-icon" fontSize="inherit" />
        2026 Trevor Mee. Built with React, TypeScript, and Material UI.
      </Typography>
    </footer>
  );
}
