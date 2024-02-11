import React from 'react';
import { Stack } from '@mui/material';
import JobItem from './JobItem';

const JOBS = [
  {
    title: 'Teaching Assistant (CS3353: Fundamentals of Algorithm)',
    date: 'Feb, 2023 - May, 2023',
    details: [
      'Actively supported the professor and students in the course, addressing student inquiries, offering tutoring, enhancing their academic understanding and progress.',
      'Responsible for evaluating and grading assignments, providing constructive feedback to students to support their course development, and understanding of the materials.',
    ],
    company: 'Southern Methodist University',
  },
  {
    title: 'Mechanical Engineer',
    date: 'Jun, 2021 - Jun, 2022',
    details: [
      'Demonstrated comprehensive skills while working across Fabrication, Quality Control, and Engineering departments, contributing significantly to operational efficiency, process reliability, and product quality.',
      'Engaged in daily monitoring of production statistics, analyzed production downtime, and implemented inspection and testing methods to ensure process reliability.',
      'Coordinated several cross-department projects, overseeing team management, and ensuring efficient collaboration. Reported on project progress and key metrics to company management daily, facilitating informed decision making.',
    ],
    company: 'Fuyao Glass Illinois Inc.',
  },
  {
    title: 'Mechanical Engineer (Intern)',
    date: 'Jun, 2020 - Aug, 2020',
    details: [
      'Gained expertise and understanding in manufacturing process and the operation, maintenance and mechanism behind the production equipment adopted by the company.',
      'Conducted research and utilized Computer-Aided Design (CAD) tools for 2/3D design projects in AutoCAD to actively support project progress across different departments in the company.',
      'Facilitated communication between engineering team from China and local company employees. Prepared data for management reviews, enhancing work coordination and collaboration efficiency.',
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
