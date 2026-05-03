import { List, ListItem, ListItemIcon, Stack, ListItemText, Paper, Grow } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { InView } from 'react-intersection-observer';

import DevicesIcon from '@mui/icons-material/Devices';
import StorageIcon from '@mui/icons-material/Storage';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import ModelTrainingIcon from '@mui/icons-material/ModelTraining';

import CustomSvgIcon from '../../ui/CustomSvgIcon';
import { skillCategories } from '../../../data/skills';

const CATEGORY_ICONS = {
  devices: <DevicesIcon sx={{ mr: '0.25em' }} />,
  storage: <StorageIcon sx={{ mr: '0.25em' }} />,
  dynamicfeed: <DynamicFeedIcon sx={{ mr: '0.25em' }} />,
  modeltraining: <ModelTrainingIcon sx={{ mr: '0.25em' }} />,
};

function SkillsLists() {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        '&:hover .skill-card': {
          transform: 'scale(0.96)',
          opacity: 0.72,
        },
        '& .skill-card:hover': {
          transform: 'scale(1.04) !important',
          opacity: '1 !important',
          boxShadow: '0 8px 28px rgba(0,0,0,0.18) !important',
        },
      }}
    >
      {skillCategories.map((category, index) => (
        <Grid size={{ xs: 10, sm: 6, md: 6, lg: 3 }} key={category.title}>
          <InView threshold={0.15} triggerOnce>
            {({ inView, ref }) => (
              <div ref={ref}>
                <Grow in={inView} timeout={300 + index * 100}>
                  <Paper
                    className='skill-card'
                    elevation={12}
                    style={{ padding: '16px' }}
                    sx={{
                      transition:
                        'transform 0.25s ease, opacity 0.25s ease, box-shadow 0.25s ease',
                    }}
                  >
                    <Stack spacing={1}>
                      <div
                        style={{
                          fontWeight: 'bold',
                          display: 'flex',
                          alignItems: 'center',
                          marginBottom: '0px',
                        }}
                      >
                        {CATEGORY_ICONS[category.categoryIconKey]}
                        {category.title}
                      </div>
                      <List style={{ paddingTop: 0 }}>
                        {category.items.map((item) => (
                          <ListItem
                            key={item.label}
                            style={{ paddingLeft: '1em', paddingTop: '6.5px' }}
                          >
                            <ListItemIcon
                              style={{ minWidth: '30px', marginRight: '5px' }}
                            >
                              <CustomSvgIcon path={item.iconPath} />
                            </ListItemIcon>
                            <ListItemText primary={item.label} />
                          </ListItem>
                        ))}
                      </List>
                    </Stack>
                  </Paper>
                </Grow>
              </div>
            )}
          </InView>
        </Grid>
      ))}
    </Grid>
  );
}

export default SkillsLists;
