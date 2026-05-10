import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

type WorkExperience = {
  company: string;
  title: string;
  location: string;
  dates: string;
  bullets: string[];
};

const CONST_WORK_EXPERIENCE: WorkExperience[] = [
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
];

export default function Experience() {
  return (
    <section id="experience">
      <h2 style={{ textAlign: "center", marginTop: "2rem" }}>Experience</h2>

      <Timeline>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Software Engineer I</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Software Enginner Intern</TimelineContent>
        </TimelineItem>
      </Timeline>
    </section>
  );
}
