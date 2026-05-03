import { ListItem, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import SchoolIcon from '@mui/icons-material/School';

import { educationEntries } from '../../../data/education';
import { colors } from '../../../theme/colors';

function EducationItem() {
  return (
    <Stack component='ul' spacing={0}>
      {educationEntries.map((entry) => (
        <ListItem key={entry.institution} component='li' sx={{ width: '100%' }}>
          <Grid
            container
            spacing={1}
            justifyContent='space-between'
            sx={{ width: { xs: '100%', sm: '100%', md: '90%', lg: '90%' } }}
          >
            <Grid item size={{ xs: 12, sm: 6 }}>
              <Typography variant='h7' component='h4'>
                {entry.institution}
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              sx={{ textAlign: { xs: 'left', sm: 'right' } }}
            >
              {entry.period}
            </Grid>
            <Grid
              item
              size={{ xs: 12 }}
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <SchoolIcon />
              <span style={{ marginLeft: '8px' }}>{entry.degree}</span>
            </Grid>
            <div
              style={{
                width: '100%',
                borderBottom: `1px solid ${colors.border}`,
                margin: '8px 0',
                marginBottom: '0',
                marginTop: '1em',
              }}
            />
          </Grid>
        </ListItem>
      ))}
    </Stack>
  );
}

export default EducationItem;
