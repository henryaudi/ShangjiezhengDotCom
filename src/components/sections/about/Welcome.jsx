import { Typography, Stack, Fade } from '@mui/material';

import { useInViewOnce } from '../../../hooks/useInViewOnce';
import { profile } from '../../../data/profile';
import { colors } from '../../../theme/colors';
import CustomSvgIcon from '../../ui/CustomSvgIcon';

function Welcome() {
  const { ref, inView } = useInViewOnce({ threshold: 0.05 });

  return (
    <div ref={ref}>
      <Fade in={inView} timeout={800}>
        <div>
          <Stack spacing={2}>
            <div>
              <Typography variant='h4' component='h1' style={{ fontWeight: 'bold' }}>
                Welcome to Shangjie (Henry) Zheng&apos;s homepage!
              </Typography>
            </div>
            <div>
              <Typography variant='body1' style={{ marginBottom: '0px' }}>
                I am an Embedded Systems & Software Engineer working with Energy
                Storage Systems {' ('}ESS{') '}and Battery Management Systems {'('}BMS{')'} with focus on
                controls software development and modeling. I earned my Master
                of Science degree in Computer Science at{' '}
                <a
                  href='https://www.smu.edu/lyle'
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ color: colors.accent }}
                >
                  Lyle School of Engineering
                </a>
                {', '}
                <a
                  href='https://www.smu.edu'
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ color: colors.accent }}
                >
                  Southern Methodist University (SMU)
                </a>
                . Before attending SMU, I studied Mechanical Engineering at{' '}
                <a
                  href='https://umkc.edu'
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ color: colors.accent }}
                >
                  University of Missouri - Kansas City (UMKC){' '}
                </a>
                for my undergrad and was a mechanical engineer in glass manufacturing
                industry for a year right out of college.
                <br />
              </Typography>
            </div>
            <div>
              <Typography variant='body1' style={{ marginBottom: '0px' }}>
                I always see myself as a passionate advocate for embracing innovative
                technology to solve real-world challenges. My technical R&D interests
                include:
              </Typography>
            </div>
            <div style={{ paddingLeft: '2em', marginTop: '0.75em' }}>
              <Interests />
            </div>
            <div>
              For more information, please check out my CV attached here:{' '}
              <a
                href={profile.resumeUrl}
                target='_blank'
                rel='noopener noreferrer'
                style={{ color: colors.accent }}
              >
                Shangjie_resume.pdf
              </a>
            </div>
          </Stack>
        </div>
      </Fade>
    </div>
  );
}

const interests = [
  { icon: '/distributed-database.svg', label: 'Distributed Systems & Data Streaming' },
  { icon: '/full-stack-terminal.svg', label: 'Full-Stack Development' },
  { icon: '/real-time-systems.svg', label: 'Real-Time Systems Software' },
  { icon: '/machine-learning-svgrepo-com.svg', label: 'Applied Machine Learning Systems' },
];

function Interests() {
  return (
    <Stack spacing={1}>
      {interests.map((item) => (
        <div key={item.label} style={{ display: 'flex', alignItems: 'center' }}>
          <CustomSvgIcon path={item.icon} style={{ marginRight: '0.7em' }} />
          {item.label}
        </div>
      ))}
      <div style={{ display: 'flex', alignItems: 'center', marginTop: '-5px' }}>
        <Typography variant='h5'>...</Typography>
      </div>
    </Stack>
  );
}

export default Welcome;
