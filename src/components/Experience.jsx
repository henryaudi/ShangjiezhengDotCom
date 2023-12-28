import { Stack, Typography } from '@mui/material';
import EducationExperience from './EducationExperience';
import ProfessionalExperience from './ProfessionalExperience';

function Experience() {
  return (
    <Stack spacing={2}>
      <div>
        <Typography
          variant='h5'
          component='h2'
          style={{ textDecoration: 'underline', fontWeight: 'bold' }}
        >
          Experience
        </Typography>
      </div>
      <div style={{ marginTop: '0.75em' }}>
        <EducationExperience />
      </div>
      <div style={{ marginTop: '0.75em' }}>
        <ProfessionalExperience />
      </div>
    </Stack>
  );
}

export default Experience;
