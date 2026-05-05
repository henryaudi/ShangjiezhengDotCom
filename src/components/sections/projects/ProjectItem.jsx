/* eslint-disable react/prop-types */
import { useState } from 'react';
import {
  Box,
  Collapse,
  Link,
  List,
  ListItem,
  Paper,
  Stack,
  Typography,
  Chip,
} from '@mui/material';

import CustomSvgIcon from '../../ui/CustomSvgIcon';
import DropDownButton from '../../ui/DropDownButton';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { colors } from '../../../theme/colors';

// Shared "code tag" chip style — monospace, sharp corners, fills on hover
const codeChipSx = {
  mx: '0.2em',
  my: '0.15em',
  height: '22px',
  borderRadius: '3px',
  border: '1px solid',
  borderColor: 'grey.300',
  bgcolor: 'grey.50',
  color: 'text.secondary',
  fontFamily: "'SFMono-Regular', 'Menlo', 'Consolas', 'Courier New', monospace",
  fontSize: '0.7rem',
  fontWeight: 500,
  letterSpacing: '0.02em',
  transition: 'background-color 0.15s ease, color 0.15s ease, border-color 0.15s ease',
  '& .MuiChip-label': { px: '8px' },
  '&:hover': {
    bgcolor: colors.primary,
    borderColor: colors.primary,
    color: 'white',
    cursor: 'default',
  },
};

function ProjectItem({ project }) {
  const { title, techStacks, actions, iconPath, links } = project;
  const [open, setOpen] = useState(false);

  return (
    <Paper
      elevation={12}
      sx={{
        p: '16px',
        borderLeft: '3px solid transparent',
        transition: 'transform 0.22s ease, box-shadow 0.22s ease, border-left-color 0.22s ease',
        '&:hover': {
          transform: 'translateY(-3px)',
          boxShadow: '0 16px 38px rgba(0,0,0,0.2)',
          borderLeftColor: colors.accent,
        },
      }}
    >
      <Stack spacing={0}>
        {/* Title row */}
        <Box sx={{ display: 'flex', alignItems: 'center', mb: '0.25em', fontWeight: 'bold' }}>
          <Box
            sx={{
              minWidth: '30px',
              mr: '0.5em',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <CustomSvgIcon path={iconPath} />
          </Box>
          <Typography variant='h6' component='h4'>
            {title}
          </Typography>
        </Box>

        {/* Tech stack — code tag chips */}
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            ml: '2em',
            mt: '0.5em',
            mb: '0.25em',
            rowGap: '0.25em',
          }}
        >
          {techStacks.map((tech) => (
            <Chip key={tech} label={tech} size='small' sx={codeChipSx} />
          ))}
        </Box>

        {/* Links dropdown */}
        {links && links.length > 0 && (
          <Box sx={{ ml: '2em', mt: '0.5em' }}>
            <DropDownButton open={open} setOpen={setOpen} buttonTitle='Links to Project' />
          </Box>
        )}
        <Box sx={{ ml: '3em' }}>
          <Collapse in={open}>
            {links &&
              links.map((link) => (
                <Typography key={link.title} variant='subtitle1' sx={{ mt: '0.5em' }}>
                  <Link
                    href={link.url}
                    target='_blank'
                    rel='noopener'
                    sx={{
                      color: 'black',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      textDecoration: 'underline',
                      '&:hover': { color: colors.accent },
                    }}
                  >
                    <OpenInNewIcon sx={{ mx: '4px', verticalAlign: 'middle' }} />
                    {link.title}
                  </Link>
                </Typography>
              ))}
          </Collapse>
        </Box>

        {/* Action items — accent square bullets replacing dated chevron icon */}
        <List sx={{ pt: '0.25em' }}>
          {actions.map((action) => (
            <ListItem key={action} sx={{ mt: '0.25em', alignItems: 'flex-start', px: 0 }}>
              <Box
                sx={{
                  width: 6,
                  height: 6,
                  borderRadius: '1px',
                  bgcolor: colors.accent,
                  flexShrink: 0,
                  mt: '0.45em',
                  mr: 1.5,
                }}
              />
              <Typography variant='body2'>{action}</Typography>
            </ListItem>
          ))}
        </List>
      </Stack>
    </Paper>
  );
}

export default ProjectItem;
