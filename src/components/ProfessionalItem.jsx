import React from 'react';
import { Paper, Stack, Box } from '@mui/material';
import JobItem from './JobItem';

const JOBS = [
  {
    title: 'Software Intern, Control Systems',
    date: 'Jul, 2024 - Present',
    skills: [
      'Embedded C',
      'MATLAB',
      'Simulink',
      'Microcontroller',
      'CAN',
      'BMS',
    ],
    details: [
      'Collaborated in the development and research of embedded software for Battery Management System (BMS).',
      'Reviewed and evaluated the existing BMS firmware program in “C” and Simulink model, refining algorithms for cell balancing, SoC and SoH estimation. Resolved software defects identified during the process, enhancing system functionality and accuracy.',
      'Developed and implemented robust control algorithm for the BMS fault detection layer, safeguarding reliable signal processing and validation against hardware thresholds, achieving significant improvements in the HAL’s reliability.',
      'Led embedded BMS software/model validation, creating automated test cases for the Controller Area Network (CAN) conforming J1939 standard using CANalyzer, J-Link debugger, ensuring BMS configurability and communication integrity.',
    ],
    company: 'Lion Energy LLC',
  },
  {
    title: 'Graduate Research Assistant',
    date: 'Aug, 2023 - Present',
    skills: [
      'Embedded C',
      'MATLAB',
      'Simulink',
      'Microcontroller',
      'CAN',
      'BMS',
    ],
    details: [
      "Collaborated with Dr. Huang Liguo's research team, innovating machine learning models to identify logical form of environmental statements in legal context.",
      'Led the development of software tools for data processing and analysis, fine-tuning GPT-3.5 and Gemini models to develop specialized classifier using open-source ML libraries (Keras, spaCy).',
      'Actively engaged in weekly meetings, maintained and managed project documentation on GitHub, promoting teamwork and knowledge exchange.',
    ],
    company: 'Southern Methodist University',
  },
  {
    title: 'Teaching Assistant (CS3353: Fundamentals of Algorithm)',
    date: 'Feb, 2023 - May, 2023',
    skills: [
      'Embedded C',
      'MATLAB',
      'Simulink',
      'Microcontroller',
      'CAN',
      'BMS',
    ],
    details: [
      'Actively supported the professor and students in the course, effectively addressing inquiries.',
      'Responsible for assessing assignments, providing constructive feedback to support students course development.',
      "Enhanced students' academic understanding and progress through effective communication and targeted tutoring.",
    ],
    company: 'Southern Methodist University',
  },
  {
    title: 'Mechanical Engineer',
    date: 'Jun, 2021 - Jun, 2022',
    skills: [
      'Embedded C',
      'MATLAB',
      'Simulink',
      'Microcontroller',
      'CAN',
      'BMS',
    ],
    details: [
      'Demonstrated comprehensive skills while working across Fabrication, Quality Control, and Engineering departments.',
      'Improved process reliability through production monitoring, downtime analysis, and implementing QC strategies.',
      'Coordinated cross-department projects, reporting progress to the company, and facilitating management decisions.',
    ],
    company: 'Fuyao Glass Illinois Inc.',
  },
];

function ProfessionalItem() {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: { xs: '100%', sm: '100%', md: '90%', lg: '90%' },
        margin: '2 auto',
        mt: '0.5em',
      }}
    >
      <Stack component='ul' spacing={2}>
        {JOBS.map((job) => (
          <Paper key={job.title + job.date} elevation={12} sx={{ padding: 1 }}>
            <JobItem job={job} />
          </Paper>
        ))}
      </Stack>
    </Box>
  );
}

export default ProfessionalItem;
