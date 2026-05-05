import { Stack, Typography } from '@mui/material';
import ProfessionalItem from './ProfessionalItem';

function ProfessionalExperience() {
  return (
    <Stack spacing={1}>
      <div>
        <Typography variant='h6' component='h3' style={{ fontWeight: 'bold' }}>
          Professional Experience
        </Typography>
      </div>
      <div style={{ marginTop: '0px', paddingTop: '0px' }}>
        <ProfessionalItem />
      </div>
    </Stack>
  );
}

export default ProfessionalExperience;
