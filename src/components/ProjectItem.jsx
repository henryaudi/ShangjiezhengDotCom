import React, { useState } from 'react';

import {
  Collapse,
  Link,
  List,
  ListItem,
  IconButton,
  Box,
  Paper,
  Stack,
  Typography,
} from '@mui/material';

import CustomSvgIcon from './CustomSvgIcon';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

function ProjectItem({ project }) {
  const { title, techStacks, actions, iconPath, links } = project;

  const [open, setOpen] = useState(false);

  const handleToggle = function () {
    setOpen((open) => !open);
  };

  return (
    <Paper elevation={16} style={{ padding: '16px' }}>
      <Stack spacing={0}>
        <div
          style={{
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            marginBottom: '0.25em',
          }}
        >
          <div
            style={{
              minWidth: '30px',
              marginRight: '0.5em',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <CustomSvgIcon path={iconPath} />
          </div>
          <Typography variant='h6' component='h4'>
            {title}
          </Typography>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginLeft: '2em',
            flexWrap: 'wrap',
          }}
        >
          <Typography
            style={{ marginRight: '0.25em', fontWeight: 'bold' }}
            variant='subtitle1'
            component='p'
          >
            Tech Stacks:
          </Typography>
          {techStacks.map((techStack, index) => (
            <Typography
              style={{ marginRight: '0.5em' }}
              variant='subtitle1'
              component='p'
              key={techStack}
            >
              {index === techStacks.length - 1 ? techStack : techStack + ','}
            </Typography>
          ))}
        </div>
        {links && links.length > 0 && (
          <div style={{ marginLeft: '2em', marginTop: '0.5em' }}>
            <Box
              onClick={handleToggle}
              sx={{
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
                border: '1px solid #ccc',
                borderRadius: '4px',
                backgroundColor: 'darkslategray',
                padding: '0px 8px',
                marginTop: '2px',
                maxWidth: 'fit-content',
                color: 'white',
                '&:hover': {
                  backgroundColor: '#2f4f4f',
                },
              }}
            >
              <Typography
                variant='body1'
                style={{ fontSize: '0.875rem', marginLeft: '0em' }}
              >
                Links to Project
              </Typography>
              <IconButton
                style={{
                  color: 'white',
                  padding: '4px',
                  paddingRight: '0px',
                  marginLeft: '2em',
                }}
              >
                <ExpandMoreIcon
                  style={{
                    transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s',
                  }}
                />
              </IconButton>
            </Box>
          </div>
        )}
        <div style={{ marginLeft: '3em' }}>
          <Collapse in={open}>
            {links &&
              links.map((link) => (
                <Typography
                  key={link.title}
                  variant='subtitle1'
                  style={{ marginTop: '0.5em' }}
                >
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
                      '&:hover': {
                        color: 'rgb(39, 190, 180)',
                      },
                    }}
                  >
                    <OpenInNewIcon
                      sx={{
                        marginLeft: '4px',
                        marginRight: '4px',
                        verticalAlign: 'middle',
                      }}
                    />
                    {link.title}
                  </Link>
                </Typography>
              ))}
          </Collapse>
        </div>
        <div>
          <List sx={{ pt: '0.25em' }}>
            {actions.map((action, index) => (
              <ListItem key={action} sx={{ mt: '0.25em' }}>
                <ArrowForwardIosIcon />
                <div style={{ marginLeft: '0.25em' }}>{action}</div>
              </ListItem>
            ))}
          </List>
        </div>
      </Stack>
    </Paper>
  );
}

export default ProjectItem;
