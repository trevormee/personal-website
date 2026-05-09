import { Container, Grid, Typography } from "@mui/material";

export default function About() {
  return (
    <section id="about">
      <h2 style={{ textAlign: "center", marginTop: "2rem" }}>About</h2>
      <Container
        maxWidth="lg"
        sx={{ px: { xs: 2, md: 4 }, py: { xs: 8, md: 12 } }}
      >
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 8 }} sx={{ "& p": { pb: 2 } }}>
            <Typography>Overview</Typography>
            <p>
              Software engineer focused on building practical applications and
              data-driven solutions.
            </p>
            <p>
              I currently work as a software engineer for a Department of
              Defense (DoD) contractor building applications to support the
              Warfighter. Additionally, I am in pursuit of my master's degree in
              Analytics, with a focus in Computational Data Analytics, through
              Georgia Tech's OMSA program. I graduated with a B.S. in Computer
              Science from the University of West Florida in 2021.
            </p>
            <p>
              I am especially passionate about frontend development, data
              science, and the rapid advancement of AI and Machine Learning.
            </p>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>Skills snapshot</Grid>
        </Grid>
      </Container>
    </section>
  );
}
