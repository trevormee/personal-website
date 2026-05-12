import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Box, Container, Paper, Stack, Typography } from "@mui/material";

type WorkExperience = {
  company: string;
  title: string;
  location: string;
  dates: string;
  bullets: string[];
};

const WORK_EXPERIENCE: WorkExperience[] = [
  // DS2
  {
    company: "DS2",
    title: "Software Engineer I",
    location: "Niceville, FL",
    dates: "Jun 2025 - Present",
    bullets: [
      "Develop frontend features using React, Typescript, and Material UI",
      "Design and implement architecture for frontend workflows",
      "Collaborate cross-functional teams and stakeholders to deliver reliable software solutions",
    ],
  },

  // ASEI
  {
    company: "ASEI",
    title: "Software Engineer Intern",
    location: "Niceville, FL",
    dates: "Summers 2023 & 2024",
    bullets: [
      "Collabored with 7 interns to build an optimal tracker system with custom-embedded software",
      "Built an automated calibration tool and designed GUI components",
      "Collaborated with the DevOps team to enhance software automation process",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience">
      <h2 style={{ textAlign: "center" }}>Experience</h2>

      <Container
        maxWidth="lg"
        sx={{
          px: { xs: 2, md: 4 },
          py: 0,
        }}
      >
        <Timeline position="right">
          {WORK_EXPERIENCE.map((job, index) => (
            <TimelineItem key={job.title}>
              <TimelineSeparator>
                <TimelineDot variant="outlined" />
                {index < WORK_EXPERIENCE.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent>
                <Paper variant="outlined">
                  <Stack spacing={2}>
                    <Box>
                      <Typography variant="h5" color="text.primary">
                        {job.company}
                      </Typography>

                      <Typography
                        variant="body2"
                        sx={{
                          fontStyle: "italic",
                          color: "text.secondary",
                        }}
                      >
                        {job.title} | {job.location} | {job.dates}
                      </Typography>
                    </Box>

                    <Box component="ul" sx={{ m: 0, pl: 3 }}>
                      {job.bullets.map((bullet) => (
                        <Typography
                          key={bullet}
                          component="li"
                          variant="body1"
                          sx={{ mb: 1 }}
                        >
                          {bullet}
                        </Typography>
                      ))}
                    </Box>
                  </Stack>
                </Paper>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </section>
  );
}
