/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Box, ListItem, Typography, Collapse, List } from '@mui/material';
import Grid from '@mui/material/Grid2';
import ConstructionIcon from '@mui/icons-material/Construction';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import DropDownButton from '../../ui/DropDownButton';

// showCompany=true  → legacy single-item view (company + date side by side)
// showCompany=false → grouped view (company is shown by parent; only date here)
function JobItem({ job, showCompany = true }) {
  const [open, setOpen] = useState(false);

  const { title, date, details, company, skills } = job;

  return (
    <ListItem
      component='li'
      style={{ padding: '0', marginLeft: '0', margin: '0' }}
    >
      <Grid container spacing={1} justifyContent='space-between'>

        {showCompany ? (
          /* ── Legacy / standalone view ─────────────────────────────── */
          <>
            <Grid item size={{ xs: 12, sm: 6 }}>
              <Typography variant='h6' component='h3' fontWeight='bold'>
                {company}
              </Typography>
            </Grid>
            <Grid
              item
              size={{ xs: 12, sm: 6 }}
              sx={{ textAlign: { xs: 'left', sm: 'right' } }}
            >
              {date}
            </Grid>
          </>
        ) : (
          /* ── Grouped view: date only ──────────────────────────────── */
          <Grid item size={{ xs: 12 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant='body2' color='text.secondary'>
                {date}
              </Typography>
            </Box>
          </Grid>
        )}

        {/* Role title */}
        <Grid
          item
          size={{ xs: 12 }}
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <PermIdentityIcon fontSize='small' />
          <span style={{ marginLeft: '8px' }}>{title}</span>
        </Grid>

        {/* Skills */}
        {skills && (
          <Grid
            item
            size={{ xs: 12 }}
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <ConstructionIcon fontSize='small' />
            <span style={{ marginLeft: '8px' }}>
              <Typography
                variant='body2'
                style={{
                  marginBottom: '0px',
                  fontWeight: 200,
                  fontStyle: 'italic',
                }}
              >
                {skills.join(', ')}
              </Typography>
            </span>
          </Grid>
        )}

        {/* Job details collapse */}
        <Grid item size={{ xs: 12 }}>
          <DropDownButton open={open} setOpen={setOpen} buttonTitle='Job Details' />
          <Collapse in={open} timeout='auto' unmountOnExit style={{ marginLeft: '2em' }}>
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
            marginBottom: '0',
            marginTop: '0.75em',
          }}
        />
      </Grid>
    </ListItem>
  );
}

export default JobItem;
