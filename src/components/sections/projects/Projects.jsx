import { Stack, Typography, Grow, Paper } from '@mui/material';
import { InView } from 'react-intersection-observer';
import { useRef } from 'react';

import ProjectItem from './ProjectItem';
import CustomSvgIcon from '../../ui/CustomSvgIcon';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

import { projects } from '../../../data/projects';
import { profile } from '../../../data/profile';
import { colors } from '../../../theme/colors';

function Projects() {
  const rootRef = useRef(null);

  return (
    <Stack spacing={2}>
      <div>
        <Typography
          variant='h5'
          component='h2'
          sx={{
            fontWeight: 'bold',
            borderLeft: `4px solid ${colors.accent}`,
            paddingLeft: '0.6em',
            lineHeight: 1.3,
          }}
        >
          Projects
        </Typography>
      </div>
      <Stack spacing={5} style={{ marginTop: '0.75em' }}>
        {projects.map((project, index) => (
          <InView
            key={project.title}
            root={rootRef.current}
            rootMargin='200px 0px 200px 0px'
            threshold={0}
            triggerOnce
          >
            {({ inView, ref }) => (
              <Grow
                in={inView}
                timeout={{ enter: 1000, exit: 500 }}
              >
                <div ref={ref} id={`project-${index}`} className='project-item'>
                  <ProjectItem project={project} />
                </div>
              </Grow>
            )}
          </InView>
        ))}

        <InView key='moreprojects' threshold={0} triggerOnce>
          {({ inView, ref }) => (
            <Grow in={inView}>
              <div ref={ref} id='moreprojects' className='project-item'>
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
                      <span style={{ alignItems: 'center', display: 'inline-flex' }}>
                        For more interesting projects, visit my&nbsp;
                        <a
                          href={profile.github}
                          target='_blank'
                          rel='noopener noreferrer'
                          style={{
                            textDecoration: 'underline',
                            alignItems: 'center',
                            color: colors.accent,
                            display: 'inline-flex',
                          }}
                        >
                          <OpenInNewIcon
                            sx={{
                              color: colors.accent,
                              marginLeft: '4px',
                              verticalAlign: 'middle',
                            }}
                          />
                          GitHub!
                        </a>
                      </span>
                    </Typography>
                  </div>
                </Paper>
              </div>
            </Grow>
          )}
        </InView>
      </Stack>
    </Stack>
  );
}

export default Projects;
