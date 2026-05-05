import { IconButton, Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';

import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

import { profile } from '../../data/profile';
import { colors } from '../../theme/colors';

function Footer() {
  return (
    <Grid
      container
      spacing={2}
      style={{
        backgroundColor: colors.primary,
        color: 'white',
        padding: '1em',
        paddingBottom: '1.5em',
      }}
    >
      <Grid
        item
        size={{ xs: 12, sm: 12, md: 4 }}
        order={{ xs: 3, sm: 3, md: 1 }}
        sx={{ display: { xs: 'none', sm: 'none', md: 'flex' } }}
      >
        <Grid container spacing={1}>
          <Grid item size={{ md: 12 }}>
            <Typography variant='h5' component='h3' sx={{ fontWeight: 'bold' }}>
              {profile.displayName}
            </Typography>
          </Grid>
          <Grid
            item
            size={{ md: 12 }}
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <MailIcon style={{ marginRight: '0.5em' }} />
            <Typography sx={{ color: 'white' }}>Email:</Typography>
            <IconButton
              onClick={() => window.open(`mailto:${profile.email}`)}
              sx={{
                ml: '2px',
                pl: '5px',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '0',
                },
              }}
            >
              <Box>
                <Typography style={{ color: 'white' }}>{profile.email}</Typography>
              </Box>
            </IconButton>
          </Grid>
          <Grid
            item
            size={{ md: 12 }}
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <PhoneIcon style={{ marginRight: '0.5em' }} />
            <Typography sx={{ color: 'white' }}>Tel: {profile.phone}</Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        item
        size={{ xs: 12, sm: 12, md: 4 }}
        order={{ xs: 1, sm: 1, md: 2 }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}
        >
          <img
            src='/logo_white_text.png'
            alt='Logo'
            style={{ height: '5.2rem', width: 'auto' }}
          />
        </Box>
      </Grid>

      <Grid
        item
        size={{ xs: 12, sm: 12, md: 4 }}
        order={{ xs: 2, sm: 2, md: 3 }}
        sx={{ display: { xs: 'block', sm: 'block', md: 'none' } }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <IconButton
            onClick={() => window.open(`mailto:${profile.email}`)}
            sx={{ minWidth: 44, minHeight: 44 }}
          >
            <MailIcon sx={{ color: 'white', mx: 2 }} />
          </IconButton>
          <IconButton
            onClick={() => window.open(profile.linkedin, '_blank')}
            sx={{ minWidth: 44, minHeight: 44 }}
          >
            <LinkedInIcon sx={{ color: 'white', mx: 2 }} />
          </IconButton>
          <IconButton
            onClick={() => window.open(profile.github, '_blank')}
            sx={{ minWidth: 44, minHeight: 44 }}
          >
            <GitHubIcon sx={{ color: 'white', mx: 2 }} />
          </IconButton>
        </Box>
      </Grid>

      <Grid
        item
        size={{ xs: 12 }}
        order={{ xs: 4, sm: 4, md: 4 }}
        style={{ textAlign: 'center' }}
      >
        <Typography variant='body2' component='p'>
          &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
          <br />
          Website designed using components from{' '}
          <a
            href='https://mui.com/'
            target='_blank'
            rel='noopener noreferrer'
            style={{ textDecoration: 'underline', color: 'inherit' }}
          >
            MUI
          </a>{' '}
          and SVG icons from{' '}
          <a
            href='https://www.svgrepo.com/'
            target='_blank'
            rel='noopener noreferrer'
            style={{ textDecoration: 'underline', color: 'inherit' }}
          >
            SVG Repo
          </a>
          .
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Footer;
