import React, { useEffect, useState, useRef } from 'react';
import { Stack, Typography, Grow } from '@mui/material';

import ProjectItem from './ProjectItem';

const projects = [
  {
    title: 'TA Management Application (SMU CS Department)',
    techStacks: ['TypeScript', 'React', 'Node.js', 'MySQL', 'Jest', 'GitHub'],
    actions: [
      'Drove development in a Scrum team, overseeing all stages from requirements analysis to application deployment.',
      'Developed a dynamic full stack application using React and Node.js, integrated MySQL database, ensuring user friendly experience and effective data handling.',
      'Utilized software tools for version control (GitHub) and container environments (Docker) during team development',
      'Designed and implemented logics to interact with the MySQL database created for backend of the software system.',
    ],
    iconPath: '/teacher-svgrepo-com.svg',
  },
  {
    title: 'Roadside Assistance Application',
    techStacks: ['JavaScript', 'Node.js', 'Express.js', 'MySQL', 'HTML', 'CSS'],
    actions: [
      'Developed web application that provides direct driver-technician communication platform.',
      'Designed and implemented user interface using HTML/CSS, and Express.JS framework.',
      'Developed middleware set using JavaScript on Express.JS framework to implement post, get and other functions to interact with the user interface and backend database.',
      'Designed and implemented logics to interact with the MySQL database created for backend of the software system.',
    ],
    iconPath: '/mechanic-garage-svgrepo-com.svg',
  },
  {
    title: 'Two-Phase Locking System Implementation',
    techStacks: ['Java'],
    actions: [
      'Implement the two-phase locking model using Java programming language.',
      'Create 3 classes with the program, each represents Database, Lock Manager, and Transaction, the program coordinates the progress of each transaction',
      'Implement methods for transactions to write/read in the Database object, and the program would using random number strategy to select transaction to proceed and determine whether to grant the transaction request with permission (S-lock or X-lock) or to abort the program when deadlock occurs.',
    ],
    iconPath: '/key-minimalistic-square-3-svgrepo-com.svg',
  },
  {
    title: 'PID Quadcopter Control System',
    techStacks: ['Python', 'PID Control System'],
    actions: [
      'Collect, analyze, and improve measurement data.',
      'Design and evaluate multi-input, multi-output feedback control system.',
      'Integrate and utilize measurements with physical hardware and software-based embedded control algorithm to create a PID control system.',
      'Make the quadcopter perform roll/pitch actions with rate and angle control inputs.',
    ],
    iconPath: '/drone-svgrepo-com.svg',
  },
];

function Projects() {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems((prevVisibleItems) => {
              const newVisibleItems = new Set([
                ...prevVisibleItems,
                entry.target.id,
              ]);
              observerRef.current.unobserve(entry.target);
              return newVisibleItems;
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const projectElements = document.querySelectorAll('.project-item');
    projectElements.forEach((elem) => observerRef.current.observe(elem));

    return () => {
      projectElements.forEach((elem) => {
        if (observerRef.current) observerRef.current.unobserve(elem);
      });
    };
  }, []);

  return (
    <Stack spacing={2}>
      <div>
        <Typography
          variant='h5'
          component='h2'
          style={{ textDecoration: 'underline', fontWeight: 'bold' }}
        >
          Projects
        </Typography>
      </div>
      <Stack spacing={5} style={{ marginTop: '0.75em' }}>
        {projects.map((project, index) => (
          <Grow in={visibleItems.has(`project-${index}`)} key={project.title}>
            <div id={`project-${index}`} className='project-item'>
              <ProjectItem project={project} />
            </div>
          </Grow>
        ))}
      </Stack>
    </Stack>
  );
}

export default Projects;
