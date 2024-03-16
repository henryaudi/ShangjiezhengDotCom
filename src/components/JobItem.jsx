import { useState } from 'react';
import {
  Grid,
  IconButton,
  ListItem,
  Typography,
  Collapse,
  List,
  Box,
} from '@mui/material';

import ApartmentIcon from '@mui/icons-material/Apartment';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function JobItem({ job }) {
  const [open, setOpen] = useState(false);

  const { title, date, details, company } = job;

  const handleToggle = function () {
    setOpen((open) => !open);
  };

  return (
    <ListItem component='li' style={{ paddingBottom: '0' }}>
      <Grid container spacing={1} justifyContent='space-between'>
        <Grid item xs={12} sm={6}>
          <Typography variant='h7' component='h4'>
            {title}
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{ textAlign: { xs: 'left', sm: 'right' } }}
        >
          {date}
        </Grid>
        <Grid item xs={12} style={{ display: 'flex', alignItems: 'center' }}>
          <ApartmentIcon />
          <span style={{ marginLeft: '8px' }}>{company}</span>
        </Grid>
        <Grid item xs={12}>
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
              Job Details
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
          <Collapse
            in={open}
            timeout='auto'
            unmountOnExit
            style={{ marginLeft: '2em' }}
          >
            <List component='div' disablePadding>
              {details.map((detail, index) => (
                <li key={index} style={{ marginTop: '0.5em' }}>
                  {index + 1}. {detail}
                </li>
              ))}
            </List>
          </Collapse>
        </Grid>
        <div
          style={{
            width: '100%',
            borderBottom: '1px solid #ccc',
            margin: '1em 0',
            marginBottom: '0',
            marginTop: '1em',
          }}
        />
      </Grid>
    </ListItem>
  );
}

export default JobItem;
