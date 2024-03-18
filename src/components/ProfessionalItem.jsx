import React from 'react';
import { Stack } from '@mui/material';
import JobItem from './JobItem';

const JOBS = [
  {
    title: 'Graduate Research Assistant',
    date: 'Aug, 2023 - Present',
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
    <Stack component='ul' spacing={0}>
      {JOBS.map((job) => (
        <JobItem key={job.title + job.date} job={job} />
      ))}
    </Stack>
  );
}

export default ProfessionalItem;
