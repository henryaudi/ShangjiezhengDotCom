import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';

function ContactInfo() {
  return (
    <Grid container spacing={2}>
      <Grid
        item
        sm={4}
        md={12}
        style={{ display: 'flex', alignItems: 'center' }}
      >
        <IconButton
          onClick={() => window.open('mailto:shangjiehz@gmail.com')}
          sx={{
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
        sm={4}
        md={12}
        style={{ display: 'flex', alignItems: 'center' }}
      >
        <IconButton
          onClick={() =>
            window.open('https://www.linkedin.com/in/shangjiezheng', '_blank')
          }
          sx={{
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
        sm={4}
        md={12}
        style={{ display: 'flex', alignItems: 'center' }}
      >
        <IconButton
          onClick={() => window.open('https://github.com/henryaudi', '_blank')}
          sx={{
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
