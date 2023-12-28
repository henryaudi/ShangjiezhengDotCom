import { Stack, Typography } from '@mui/material';
import EducationItem from './EducationItem';

function EducationExperience() {
  return (
    <Stack spacing={1}>
      <div>
        <Typography variant='h6' component='h3' style={{ fontWeight: 'bold' }}>
          Education
        </Typography>
      </div>
      <div style={{ marginTop: '0px', paddingTop: '0px' }}>
        <EducationItem />
      </div>
    </Stack>
  );
}

export default EducationExperience;
