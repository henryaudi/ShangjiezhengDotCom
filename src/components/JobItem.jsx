import { useState } from 'react';
import { Grid, ListItem, Typography, Collapse, List } from '@mui/material';

import ApartmentIcon from '@mui/icons-material/Apartment';
import ConstructionIcon from '@mui/icons-material/Construction';
import DropDownButton from './DropDownButton';

function JobItem({ job }) {
  const [open, setOpen] = useState(false);

  const { title, date, details, company, skills } = job;

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
        <Grid item xs={12} style={{ display: 'flex', alignItems: 'center' }}>
          <ConstructionIcon />
          <span
            style={{
              marginLeft: '8px',
            }}
          >
            <Typography variant='body2' style={{ marginBottom: '0px' }}>
              {skills.join(', ')}
            </Typography>
          </span>
        </Grid>
        <Grid item xs={12}>
          <DropDownButton
            open={open}
            setOpen={setOpen}
            buttonTitle='Job Details'
          />
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
