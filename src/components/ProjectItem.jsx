import React, { useState } from 'react';

import {
  Collapse,
  Link,
  List,
  ListItem,
  Paper,
  Stack,
  Typography,
} from '@mui/material';

import CustomSvgIcon from './CustomSvgIcon';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import DropDownButton from './DropDownButton';

function ProjectItem({ project }) {
  const { title, techStacks, actions, iconPath, links } = project;

  const [open, setOpen] = useState(false);

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
            <DropDownButton
              open={open}
              setOpen={setOpen}
              buttonTitle='Links to Project'
            />
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
