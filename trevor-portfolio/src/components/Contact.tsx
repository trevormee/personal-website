import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Button, Stack, Typography } from "@mui/material";

export default function Contact() {
  return (
    <section id="contact">
      <h2 style={{ textAlign: "center", marginTop: "2rem" }}>Contact</h2>

      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={3}
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          href="mailto:trevormee11@gmail.com"
          variant="outlined"
          sx={{
            p: 3,
            minWidth: 280,
            textTransform: "none",
          }}
        >
          <Stack spacing={1} sx={{ alignItems: "center" }}>
            <EmailIcon sx={{ fontSize: 40 }} />
            <Typography variant="h6">Email Me</Typography>
            <Typography variant="body2">trevormee11@gmail.com</Typography>
          </Stack>
        </Button>

        <Button
          href="https://www.linkedin.com/in/trevormee/"
          target="_blank"
          rel="noopener noreferrer"
          variant="outlined"
          sx={{
            p: 3,
            minWidth: 280,
            textTransform: "none",
          }}
        >
          <Stack spacing={1} sx={{ alignItems: "center" }}>
            <LinkedInIcon sx={{ fontSize: 40 }} />
            <Typography variant="h6">Connect on LinkedIn</Typography>
            <Typography variant="body2">linkedin.com/in/trevormee</Typography>
          </Stack>
        </Button>
      </Stack>
    </section>
  );
}
