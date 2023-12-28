import React from 'react';
import { Stack } from '@mui/material';
import JobItem from './JobItem';

const JOBS = [
  {
    title: 'Teaching Assistant (CS3353: Fundamentals of Algorithm)',
    date: 'Feb, 2023 - May, 2023',
    details: [
      'Teaching assistance: assisting professor and students from CS3353, Fundamentals of Algorithm, answering questions raised by the students in class, and helping with their study progress.',
      'Grading: grade each assignment for the class and provide students with feedback.',
    ],
    company: 'Southern Methodist University',
  },
  {
    title: 'Mechanical Engineer',
    date: 'Jun, 2021 - Jun, 2022',
    details: [
      'Manufacturing process: Monitor the production statistics data on daily basis; analyze possible causes to equipment downtime and come up with solutions to enhance the equipment performance in the long term.',
      'Quality Control: Implement methods to inspect, test and evaluate the reliability of manufacturing processes, products, and production equipment.',
      'CAD design: Perform 3D/2D design of certain machine parts using AutoCAD.',
      'Engineering Assistance: collect production data (product yield, parts stock etc.), organize and prepare purchasing plans for management reviews.',
    ],
    company: 'Fuyao Glass Illinois Inc.',
  },
  {
    title: 'Mechanical Engineer (Intern)',
    date: 'Jun, 2020 - Aug, 2020',
    details: [
      'Engineering Training: Studying the fundamentals of equipment adopted on the production line, basics of float glass process engineering; Plant PM process.',
      'CAD design: Research and Design with Computer-aided tools. Performing 3D/2D design on Auto CAD for projects assigned from maintenance/wareroom/packaging department; submit for review/testing/fabrication.',
      'Engineering Assistance: Assist communicating among the engineers from China, and local company employee; Preparing data for management reviews.',
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
