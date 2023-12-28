import { Stack, Typography } from '@mui/material';

import SkillsLanguages from './SkillsLanguages';
import SkillsLists from './SkillsLists';

function Skills() {
  return (
    <Stack spacing={1}>
      <div>
        <Typography
          variant='h5'
          component='h2'
          style={{ textDecoration: 'underline', fontWeight: 'bold' }}
        >
          Skills
        </Typography>
      </div>
      <div style={{ marginTop: '0.75em' }}>
        <SkillsLanguages />
      </div>
      <div style={{ marginTop: '2rem' }}>
        <SkillsLists />
      </div>
    </Stack>
  );
}

export default Skills;
