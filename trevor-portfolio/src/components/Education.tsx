import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Box, Container, Paper, Stack, Typography } from "@mui/material";

type Education = {
  universityName: string;
  dates: string;
  major: string;
  minor?: string;
  gpa?: string;
  honorsAndAchievements?: string[];
  relevantCoursework?: string[];
};

const EDUCATION_HISTORY: Education[] = [
  // GT
  {
    universityName: "Georgia Institute of Technology",
    dates: "Jan 2026 - Present",
    major: "Analytics",
    relevantCoursework: [
      "Intro to Analytics Modeling",
      "Data Analytics in Business",
    ],
  },

  // UWF
  {
    universityName: "University of West Florida",
    dates: "Aug 2021 - May 2025",
    major: "Computer Science",
    gpa: "3.63",
    honorsAndAchievements: ["President's List (3x)", "Dean's List (3x)"],
  },
];

export default function Education() {
  return (
    <section id="education">
      <h2 style={{ textAlign: "center" }}>Education</h2>

      <Container
        maxWidth="lg"
        sx={{
          px: { xs: 2, md: 4 },
          py: 0,
        }}
      >
        <Timeline position="right">
          {EDUCATION_HISTORY.map((univ, index) => (
            <TimelineItem key={univ.universityName}>
              <TimelineSeparator>
                <TimelineDot variant="outlined" />
                {index < EDUCATION_HISTORY.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent>
                <Paper variant="outlined">
                  <Stack spacing={2}>
                    <Box>
                      <Typography variant="h5" color="text.primary">
                        {univ.universityName}
                      </Typography>

                      <Typography
                        variant="body2"
                        sx={{
                          fontStyle: "italic",
                          color: "text.secondary",
                        }}
                      >
                        Major: {univ.major}
                      </Typography>

                      {univ.gpa && (
                        <Typography
                          variant="body2"
                          sx={{
                            fontStyle: "italic",
                            color: "text.secondary",
                          }}
                        >
                          GPA: {univ.gpa}
                        </Typography>
                      )}

                      <Typography
                        variant="body2"
                        sx={{
                          fontStyle: "italic",
                          color: "text.secondary",
                        }}
                      >
                        {univ.dates}
                      </Typography>

                      {univ.honorsAndAchievements &&
                        univ.honorsAndAchievements.length > 0 && (
                          <Typography
                            variant="body2"
                            sx={{
                              fontStyle: "italic",
                              color: "text.secondary",
                            }}
                          >
                            Honors & Achievements:{" "}
                            {univ.honorsAndAchievements.join(", ")}
                          </Typography>
                        )}

                      {univ.relevantCoursework &&
                        univ.relevantCoursework.length > 0 && (
                          <Typography
                            variant="body2"
                            sx={{
                              fontStyle: "italic",
                              color: "text.secondary",
                            }}
                          >
                            Relevant Coursework:{" "}
                            {univ.relevantCoursework.join(", ")}
                          </Typography>
                        )}
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
