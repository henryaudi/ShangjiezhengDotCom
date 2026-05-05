import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import DescriptionIcon from '@mui/icons-material/Description';

import { profile } from '../../data/profile';

const contacts = [
  {
    label: 'Email',
    icon: EmailIcon,
    href: `mailto:${profile.email}`,
    target: '_self',
  },
  {
    label: 'LinkedIn',
    icon: LinkedInIcon,
    href: profile.linkedin,
    target: '_blank',
  },
  {
    label: 'GitHub',
    icon: GitHubIcon,
    href: profile.github,
    target: '_blank',
  },
  {
    label: 'Resume',
    icon: DescriptionIcon,
    href: profile.resumeUrl,
    target: '_blank',
  },
];

function ContactInfo() {
  return (
    <Grid container spacing={{ xs: 0, sm: 2 }}>
      {contacts.map(({ label, icon: Icon, href, target }) => (
        <Grid
          key={label}
          size={{ xs: 3, sm: 3, lg: 12 }}
          sx={{ display: 'flex', alignItems: 'center' }}
        >
          <IconButton
            onClick={() => window.open(href, target)}
            sx={{
              minWidth: { xs: 40, sm: 44 },
              minHeight: { xs: 40, sm: 44 },
              px: { xs: 0.5, sm: 1 },
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.04)',
                borderRadius: 0,
              },
            }}
          >
            <Icon />
            <Box sx={{ display: { xs: 'none', sm: 'block' }, ml: 1 }}>
              <Typography sx={{ color: 'black' }}>{label}</Typography>
            </Box>
          </IconButton>
        </Grid>
      ))}
    </Grid>
  );
}

export default ContactInfo;
