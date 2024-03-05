import { useEffect, useState, useRef } from 'react';
import { Stack, Typography, Grow, Paper, Link } from '@mui/material';

import ProjectItem from './ProjectItem';
import CustomSvgIcon from './CustomSvgIcon';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const projects = [
  {
    title: 'TA Management Application (SMU CS Department)',
    techStacks: ['TypeScript', 'React', 'Node.js', 'MySQL', 'Jest', 'GitHub'],
    actions: [
      'TA Management Application is a dynamic full stack application using React and Node.js, integrated MySQL database, ensuring user friendly experience and effective data handling.',
      'I drove development in a Scrum team, overseeing all stages from requirements analysis to application deployment.',
      'Our team Utilized software tools for version control (GitHub) and container environments (Docker) during team development.',
    ],
    iconPath: '/teacher-svgrepo-com.svg',
  },
  {
    title: 'Roadside Assistance Application',
    techStacks: ['JavaScript', 'Node.js', 'Express.js', 'MySQL', 'HTML', 'CSS'],
    actions: [
      'I developed this web-based roadside assistance application to realize direct communication between drivers and technicians.',
      'The application has its intuitive user interface designed and implemented using JavaScript, HTML and CSS, coupled with robust middleware built in Express.js for effective user-database interaction.',
      'Back-end functionalities and integrated DBMS (MySQL) are engineered on top of Node.js framework ensuring a reliable and efficient software system.',
    ],
    iconPath: '/mechanic-garage-svgrepo-com.svg',
  },
  {
    title: 'shangjiezheng.com',
    techStacks: [
      'JavaScript',
      'CSS/HTML',
      'React',
      'AWS',
      'Amazon S3',
      'Amazon Cloudfront',
    ],
    actions: [
      '"shangjiezheng.com" is a responsive personal website developed using React, JavaScript, HTML/CSS, built with Vite.',
      "The project is currently hosted on Amazon S3, with Amazon CloudFront for fast global access to the website. The project's source codes are kept on GitHub and have been actively updated/maintained.",
      'Enabled HTTPS with an SSL certificate to enhance website security.',
    ],
    iconPath: '/favicon-svg.svg',
  },
  {
    title: 'PID Quadcopter Control System',
    techStacks: ['Python', 'PID Control System'],
    actions: [
      'Designed and assessed a multi-input, multi-output feedback control system, ensuring its dynamic responsiveness.',
      'Integrated measurement data from physical hardware into software-based embedded control algorithm, developing a Proportional-Integral-Derivative (PID) control system.',
      'Programmed the quadcopter for precise roll/pitch actions with rate and angle control for enhanced maneuverability.',
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
        <Grow in={visibleItems.has('moreprojects')} key='moreprojects'>
          <div id={'moreprojects'} className='project-item'>
            <Paper elevation={16} sx={{ padding: '16px' }}>
              <div
                style={{
                  fontWeight: 'bold',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <div
                  style={{
                    fontWeight: 'bold',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <div
                    style={{
                      minWidth: '30px',
                      marginRight: '0.5em',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <CustomSvgIcon path='/github-svgrepo-com.svg' />
                  </div>
                  <Typography variant='h6' component='h4'>
                    <span
                      style={{ alignItems: 'center', display: 'inlineFlex' }}
                    >
                      For more interesting projects, visit my
                      <a
                        href='https://github.com/henryaudi'
                        target='_blank'
                        rel='noopener noreferrer'
                        style={{
                          textDecoration: 'underline',
                          alignItems: 'center',
                          color: 'rgb(39, 190, 180)',
                        }}
                      >
                        <OpenInNewIcon
                          sx={{
                            color: 'rgb(39, 190, 180)',
                            marginLeft: '4px',
                            verticalAlign: 'middle',
                          }}
                        />
                        GitHub!
                      </a>
                    </span>
                  </Typography>
                </div>
              </div>
            </Paper>
          </div>
        </Grow>
      </Stack>
    </Stack>
  );
}

export default Projects;
