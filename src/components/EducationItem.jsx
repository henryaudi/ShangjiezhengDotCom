import { ListItem, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import SchoolIcon from '@mui/icons-material/School';

function EducationItem() {
  return (
    <Stack component='ul' spacing={0}>
      <ListItem component='li' sx={{ width: '100%' }}>
        <Grid
          container
          spacing={1}
          justifyContent='space-between'
          sx={{ width: { xs: '100%', sm: '100%', md: '90%', lg: '90%' } }}
        >
          <Grid item size={{ xs: 12, sm: 6 }}>
            <Typography variant='h7' component='h4'>
              Southern Methodist University (SMU)
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{ textAlign: { xs: 'left', sm: 'right' } }}
          >
            Aug, 2022 - May, 2024
          </Grid>
          <Grid
            item
            size={{ xs: 12 }}
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <SchoolIcon />
            <span style={{ marginLeft: '8px' }}>
              Master of Science in Computer Science
            </span>
          </Grid>
          <div
            style={{
              width: '100%',
              borderBottom: '1px solid #ccc',
              margin: '8px 0',
              marginBottom: '0',
              marginTop: '1em',
            }}
          />
        </Grid>
      </ListItem>
      <ListItem component='li' sx={{ width: '100%' }}>
        <Grid
          container
          spacing={1}
          justifyContent='space-between'
          sx={{ width: { xs: '100%', sm: '100%', md: '90%', lg: '90%' } }}
        >
          <Grid item size={{ xs: 12, sm: 6 }}>
            <Typography variant='h7' component='h4'>
              University of Missouri - Kansas City (UMKC)
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{ textAlign: { xs: 'left', sm: 'right' } }}
          >
            Jan, 2017 - May, 2021
          </Grid>
          <Grid
            item
            size={{ xs: 12 }}
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <SchoolIcon />
            <span style={{ marginLeft: '8px' }}>
              Bachelor of Science in Mechanical Engineering
            </span>
          </Grid>
          <div
            style={{
              width: '100%',
              borderBottom: '1px solid #ccc',
              margin: '8px 0',
              marginBottom: '0',
              marginTop: '1em',
            }}
          />
        </Grid>
      </ListItem>
    </Stack>
  );
}

export default EducationItem;
