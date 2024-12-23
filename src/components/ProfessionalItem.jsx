import React from 'react';
import { Box, Grow } from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from '@mui/lab';
import { timelineItemClasses } from '@mui/lab/TimelineItem';
import { useInView } from 'react-intersection-observer';
import JobItem from './JobItem';
import CustomSvgIcon from './CustomSvgIcon';

const JOBS = [
  {
    title: 'Control Systems Engineer',
    date: 'Dec, 2024 - Present',
    skills: [
      'Embedded C',
      'Python',
      'MATLAB',
      'Simulink',
      'Simscape',
      'Inter-Controller Communication',
      'BMS',
      'EMS',
    ],
    details: [
      'Researched and optimized embedded software for Energy Management System (EMS) and Battery Management System (BMS).',
      'Collaboratively engineered and implemented EMS Interface Control Module (ICM), integrating inter-controller communication protocols (CAN, UART, I2C etc.) to enable seamless coordination among DC/DC, BMS, inverters, and extension battery packs.',
      'Oversaw the complete software lifecycle for ICM, ensuring stable data transmission, scalability and robust system functionality.',
      'Refined and enhanced existing BMS control system software, conducting cell characterization test to develop an improved state-space model of the battery pack in MATLAB Simulink. Programmatically process test data using Python to support model analysis.',
      'Collaborated closely with Validation Engineers to define and execute testing procedures, ensuring system performance.',
    ],
    company: 'Lion Energy LLC',
    icon: './lion-logo.svg',
  },
  {
    title: 'Software Intern, Control Systems',
    date: 'Jul, 2024 - Dec, 2024',
    skills: [
      'Embedded C',
      'MATLAB',
      'Simulink',
      'Microcontroller',
      'Controller Area Network',
      'Battery Management System',
    ],
    details: [
      'Collaborated in the development and research of embedded software for Battery Management System (BMS).',
      'Reviewed and evaluated the existing BMS firmware program in “C” and Simulink model, refining algorithms for cell balancing, SoC and SoH estimation. Resolved software defects identified during the process, enhancing system functionality and accuracy.',
      'Developed and implemented robust control algorithm for the BMS fault detection layer, safeguarding reliable signal processing and validation against hardware thresholds, achieving significant improvements in the HAL’s reliability.',
      'Led embedded BMS software/model validation, creating automated test cases for the Controller Area Network (CAN) conforming J1939 standard using CANalyzer, J-Link debugger, ensuring BMS configurability and communication integrity.',
    ],
    company: 'Lion Energy LLC',
    icon: './lion-logo.svg',
  },
  {
    title: 'Graduate Research Assistant',
    date: 'Aug, 2023 - Present',
    skills: ['Python', 'spaCy', 'Keras', 'GPT', 'Gemini'],
    details: [
      "Collaborated with Dr. Huang Liguo's research team, innovating machine learning models to identify logical form of environmental statements in legal context.",
      'Led the development of software tools for data processing and analysis, fine-tuning GPT-3.5 and Gemini models to develop specialized classifier using open-source ML libraries (Keras, spaCy).',
      'Actively engaged in weekly meetings, maintained and managed project documentation on GitHub, promoting teamwork and knowledge exchange.',
    ],
    company: 'Southern Methodist University',
    icon: './smu-mustang.svg',
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
    icon: './smu-mustang.svg',
  },
  {
    title: 'Mechanical Engineer',
    date: 'Jun, 2021 - Jun, 2022',
    skills: [
      'Computer-Aided Design',
      'Project Managemetn',
      'Manufacturing Process Control',
      'Engineering Assistance',
    ],
    details: [
      'Demonstrated comprehensive skills while working across Fabrication, Quality Control, and Engineering departments.',
      'Improved process reliability through production monitoring, downtime analysis, and implementing QC strategies.',
      'Coordinated cross-department projects, reporting progress to the company, and facilitating management decisions.',
    ],
    company: 'Fuyao Glass Illinois Inc.',
    icon: './fuyao-logo.svg',
  },
];

function ProfessionalItem() {
  // Intersection observer on the container.
  const { ref: containerRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <Box
      ref={containerRef}
      sx={{
        width: '100%',
        maxWidth: { xs: '100%', sm: '100%', md: '90%', lg: '90%' },
        margin: '2 auto',
        mt: '0.5em',
      }}
    >
      <Timeline
        sx={{
          [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
          },
        }}
      >
        {JOBS.map((job, index) => (
          <Grow
            key={job.title + job.date}
            in={inView}
            style={{ transformOrigin: '0 0 0' }}
            timeout={300 + index * 100}
          >
            <Box>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot sx={{ backgroundColor: '#2f4f4f' }}>
                    <CustomSvgIcon
                      path={job.icon}
                      style={{
                        filter:
                          'brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(7482%) hue-rotate(180deg) brightness(100%) contrast(100%)',
                      }}
                    />
                  </TimelineDot>
                  {index !== JOBS.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent>
                  <JobItem job={job} />
                </TimelineContent>
              </TimelineItem>
            </Box>
          </Grow>
        ))}
      </Timeline>
    </Box>
  );
}

export default ProfessionalItem;
