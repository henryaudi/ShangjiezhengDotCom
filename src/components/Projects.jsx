import { useEffect, useState, useRef } from 'react';
import { Stack, Typography, Grow, Paper, Link } from '@mui/material';

import ProjectItem from './ProjectItem';
import CustomSvgIcon from './CustomSvgIcon';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const projects = [
  {
    title: 'Shop-Core, High-Concurrency E-Commerce Backend System',
    techStacks: [
      'Spring Boot',
      'MySQL',
      'Redis',
      'MyBatis',
      'Kafka',
      'JMeter',
      'Thymeleaf',
      'Nginx',
    ],
    actions: [
      'Implemented a robust high-concurrency e-commerce backend system, handling up to 100,000 QPS by integrating Redis caching with a MySQL database to boost performance by over 20 times compared to direct database interaction while preserving transaction consistency and reliability.',
      'Built backend services with Spring Boot, leveraging caching mechanisms to store template variables and pre-load static HTML on remote servers, resulting in a 70% faster page rendering time. Optimized content delivery by rerouting static requests through an Nginx reverse proxy, significantly reducing main server load during peak traffic.',
      'Integrated Kafka Message Queue for asynchronous data processing, enabling Redis (a single-threaded service) to handle message processing at a controlled pace, mitigating peak load issues and ensuring uninterrupted system performance under high concurrency.',
      'Employed MyBatis ORM to streamline database operations, abstracting SQL logic into reusable and maintainable components while reducing complexity in handling transactional queries. Configured efficient connection pooling and query caching for optimal database interaction.',
      'Conducted comprehensive unit testing with JUnit, achieving 76% code coverage by thoroughly validating all critical application logic, including edge cases. Developed additional integration tests, JMeter load tests for end-to-end validation of service components.',
    ],
    iconPath: '/network-mapping-svgrepo-com.svg',
    links: [
      {
        title: 'Source Code',
        url: 'https://github.com/henryaudi/shop-core',
      },
    ],
  },
  {
    title: 'Accountable Software Systems Adaptive to Changing Legal Context',
    techStacks: ['Python', 'GPT-3.5', 'Gemini', 'spaCy', 'Keras'],
    actions: [
      'Developed and refined a machine learning software toolset for processing and analyzing legal context data.',
      'Fine-tuned GPT-3.5, Gemini models to develop specialized classifier using open-source ML libraries (Keras, spaCy).',
      'Achieved final model capable of translating natural language into logical form, following extensive optimization.',
    ],
    iconPath: '/machine-learning-01-svgrepo-com.svg',
    links: [
      {
        title: 'Data processing toolkit repository',
        url: 'https://github.com/henryaudi/DataProcessingToolkit',
      },
    ],
  },
  {
    title: 'TA Management Application (SMU CS Department)',
    techStacks: ['TypeScript', 'React', 'Node.js', 'MySQL', 'Jest', 'GitHub'],
    actions: [
      'TA Management Application is a dynamic full stack application using React and Node.js, integrated MySQL database, ensuring user friendly experience and effective data handling.',
      'I drove development in a Scrum team, overseeing all stages from requirements analysis to application deployment.',
      'Our team Utilized software tools for version control (GitHub) and container environments (Docker) during team development.',
    ],
    iconPath: '/teacher-svgrepo-com.svg',
    links: [
      {
        title: 'Front-end repository',
        url: 'https://github.com/henryaudi/CS5-7328-Project-2023-Fall-Frontend',
      },
      {
        title: 'Back-end repository',
        url: 'https://github.com/henryaudi/CS5-7328-Project-2023-Fall-Backend',
      },
    ],
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
    links: [
      {
        title: 'Project repository',
        url: 'https://github.com/henryaudi/ShangjiezhengDotCom',
      },
    ],
  },
  {
    title: 'Tour Tracker API',
    techStacks: [
      'JavaScript',
      'Node.js',
      'Express.js',
      'MongoDB/Mongoose',
      'Postman',
    ],
    actions: [
      'Developed the Tour Tracker API, enabling robust management of tour-related operations, user authentication, and dynamic content updates.',
      'Implemented secure user authentication and profile management functionalities, enhancing personalized user interactions and data security.',
      'Engineered a community-driven review system within the API, facilitating user feedback and improving the quality of tour offerings through real-time evaluations.',
    ],
    iconPath: '/tour-pin-svgrepo-com.svg',
    links: [
      {
        title: 'Project repository',
        url: 'https://github.com/henryaudi/TourTracker',
      },
      {
        title: 'API Documentation',
        url: 'https://documenter.getpostman.com/view/28470041/2sA3Bj8E2s',
      },
    ],
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
    links: [
      {
        title: 'Project repository',
        url: 'https://github.com/henryaudi/RoadsideAssistance',
      },
    ],
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
      {
        threshold: 0.1,
      }
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
