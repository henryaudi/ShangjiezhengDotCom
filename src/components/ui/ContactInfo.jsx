import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';

import { profile } from '../../data/profile';

function ContactInfo() {
  return (
    <Grid container spacing={2}>
      <Grid
        item
        size={{ sm: 4, md: 12 }}
        style={{ display: 'flex', alignItems: 'center' }}
      >
        <IconButton
          onClick={() => window.open(`mailto:${profile.email}`)}
          sx={{
            minWidth: 44,
            minHeight: 44,
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.04)',
              borderRadius: '0',
            },
          }}
        >
          <EmailIcon />
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Typography style={{ color: 'black' }}>Email</Typography>
          </Box>
        </IconButton>
      </Grid>

      <Grid
        item
        size={{ sm: 4, md: 12 }}
        style={{ display: 'flex', alignItems: 'center' }}
      >
        <IconButton
          onClick={() => window.open(profile.linkedin, '_blank')}
          sx={{
            minWidth: 44,
            minHeight: 44,
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.04)',
              borderRadius: '0',
            },
          }}
        >
          <LinkedInIcon />
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Typography style={{ color: 'black' }}>LinkedIn</Typography>
          </Box>
        </IconButton>
      </Grid>

      <Grid
        item
        size={{ sm: 4, md: 12 }}
        style={{ display: 'flex', alignItems: 'center' }}
      >
        <IconButton
          onClick={() => window.open(profile.github, '_blank')}
          sx={{
            minWidth: 44,
            minHeight: 44,
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.04)',
              borderRadius: '0',
            },
          }}
        >
          <GitHubIcon />
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Typography style={{ color: 'black' }}>GitHub</Typography>
          </Box>
        </IconButton>
      </Grid>
    </Grid>
  );
}

export default ContactInfo;
