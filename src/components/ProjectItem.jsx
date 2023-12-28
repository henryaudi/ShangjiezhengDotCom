import React from 'react';

import {
  List,
  ListItem,
  ListItemIcon,
  Paper,
  Stack,
  Typography,
} from '@mui/material';

import CustomSvgIcon from './CustomSvgIcon';
import Divider from '@mui/material/Divider';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function ProjectItem({ project }) {
  const { title, techStacks, actions, iconPath } = project;

  return (
    <Paper elevation={16} style={{ padding: '16px' }}>
      <Stack spacing={0}>
        <div
          style={{
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            marginBottom: '0.5em',
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
