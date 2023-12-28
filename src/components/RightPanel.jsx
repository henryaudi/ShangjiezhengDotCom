import { Stack } from '@mui/material';
import Welcome from './Welcome';
import Experience from './Experience';
import Skills from './Skills';
import Projects from './Projects';

function RightPanel() {
  return (
    <Stack
      spacing={5}
      sx={{ marginLeft: { xs: '0', md: '3.5em' }, marginBottom: '2em' }}
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
