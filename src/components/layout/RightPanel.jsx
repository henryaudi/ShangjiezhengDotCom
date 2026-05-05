import { Stack } from '@mui/material';
import Welcome from '../sections/about/Welcome';
import Experience from '../sections/experience/Experience';
import Skills from '../sections/skills/Skills';
import Projects from '../sections/projects/Projects';

function RightPanel() {
  return (
    <Stack
      spacing={5}
      sx={{ marginLeft: { xs: '0', lg: '3.5em' }, marginBottom: '2em' }}
    >
      <div id='about'>
        <Welcome />
      </div>
      <div id='experience'>
        <Experience />
      </div>
      <div id='skills'>
        <Skills />
      </div>
      <div id='projects'>
        <Projects />
      </div>
    </Stack>
  );
}

export default RightPanel;
