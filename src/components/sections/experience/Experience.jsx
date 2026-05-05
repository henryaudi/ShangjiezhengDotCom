import { Stack, Typography } from '@mui/material';
import EducationExperience from './EducationExperience';
import ProfessionalExperience from './ProfessionalExperience';
import { colors } from '../../../theme/colors';

function Experience() {
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
          Experience
        </Typography>
      </div>
      <div style={{ marginTop: '0.75em' }}>
        <ProfessionalExperience />
      </div>
      <div style={{ marginTop: '0.75em' }}>
        <EducationExperience />
      </div>
    </Stack>
  );
}

export default Experience;
