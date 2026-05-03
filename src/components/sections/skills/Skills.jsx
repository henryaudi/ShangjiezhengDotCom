import { Stack, Typography } from '@mui/material';
import SkillsLanguages from './SkillsLanguages';
import SkillsLists from './SkillsLists';
import { colors } from '../../../theme/colors';

function Skills() {
  return (
    <Stack spacing={1}>
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
