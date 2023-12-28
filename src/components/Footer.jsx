import { Grid, IconButton, Box, Typography } from '@mui/material';

import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Mail } from '@mui/icons-material';

function Footer() {
  return (
    <Grid
      container
      spacing={2}
      style={{
        backgroundColor: 'darkslategray',
        color: 'white',
        padding: '1em',
      }}
    >
      <Grid
        item
        xs={12}
        sm={12}
        md={4}
        order={{ xs: 3, sm: 3, md: 1 }}
        sx={{ display: { xs: 'none', sm: 'none', md: 'flex' } }}
      >
        <Grid container spacing={1}>
          <Grid item md={12}>
            <Typography variant='h5' component='h3' sx={{ fontWeight: 'bold' }}>
              Shangjie(Henry) Zheng
            </Typography>
          </Grid>
          <Grid item md={12} style={{ display: 'flex', alignItems: 'center' }}>
            <MailIcon style={{ marginRight: '0.5em' }} />
            <Typography
              sx={{
                color: 'white',
              }}
            >
              Email:
            </Typography>
            <IconButton
              onClick={() => window.open('mailto:shangjiehz@gmail.com')}
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
                <Typography style={{ color: 'white' }}>
                  shangjiehz@gmail.com
                </Typography>
              </Box>
            </IconButton>
          </Grid>
          <Grid item md={12} style={{ display: 'flex', alignItems: 'center' }}>
            <PhoneIcon
              style={{
                marginRight: '0.5em',
              }}
            />
            <Typography
              sx={{
                color: 'white',
              }}
            >
              Tel: (816) 437-5658
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} sm={12} md={4} order={{ xs: 1, sm: 1, md: 2 }}>
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
        xs={12}
        sm={12}
        md={4}
        order={{ xs: 2, sm: 2, md: 3 }}
        sx={{ display: { xs: 'block', sm: 'block', md: 'none' } }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <IconButton
            onClick={() => window.open('mailto:shangjiehz@gmail.com')}
          >
            <MailIcon sx={{ color: 'white', mx: 2 }} />
          </IconButton>
          <IconButton
            onClick={() =>
              window.open('https://www.linkedin.com/in/shangjiezheng', '_blank')
            }
          >
            <LinkedInIcon sx={{ color: 'white', mx: 2 }} />
          </IconButton>
          <IconButton
            onClick={() =>
              window.open('https://github.com/henryaudi', '_blank')
            }
          >
            <GitHubIcon sx={{ color: 'white', mx: 2 }} />
          </IconButton>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        order={{ xs: 4, sm: 4, md: 4 }}
        style={{ textAlign: 'center' }}
      >
        <Typography variant='body2' component='p'>
          &copy; {new Date().getFullYear()} Shangjie Zheng. All rights reserved.
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
