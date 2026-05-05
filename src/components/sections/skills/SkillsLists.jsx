import { List, ListItem, ListItemIcon, Stack, ListItemText, Paper, Grow } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useInView } from 'react-intersection-observer';
import { useMediaQuery, useTheme } from '@mui/material';

import DevicesIcon from '@mui/icons-material/Devices';
import StorageIcon from '@mui/icons-material/Storage';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import ModelTrainingIcon from '@mui/icons-material/ModelTraining';

import CustomSvgIcon from '../../ui/CustomSvgIcon';
import { skillCategories } from '../../../data/skills';
import { useInViewOnce } from '../../../hooks/useInViewOnce';

const CATEGORY_ICONS = {
  devices: <DevicesIcon sx={{ mr: '0.25em' }} />,
  storage: <StorageIcon sx={{ mr: '0.25em' }} />,
  dynamicfeed: <DynamicFeedIcon sx={{ mr: '0.25em' }} />,
  modeltraining: <ModelTrainingIcon sx={{ mr: '0.25em' }} />,
};

/**
 * Individual skill card.
 *
 * Two observers run in parallel:
 *  1. mountRef  — fires once (threshold 0.1) to trigger the Grow entry animation.
 *  2. focusRef  — fires continuously with a tight rootMargin so only the card
 *                 in the centre ~40 % of the viewport is considered "focused".
 *                 On mobile this drives a scale/opacity spotlight effect.
 *                 On desktop it is unused (hover CSS takes over instead).
 */
function SkillCard({ category, index, isMobile }) {
  // Entry animation — triggers once when card first scrolls into view
  const { ref: mountRef, inView: mounted } = useInViewOnce();

  // Scroll-focus — continuously tracks whether the card is centred in viewport
  const { ref: focusRef, inView: focused } = useInView({
    rootMargin: '-30% 0px -30% 0px', // centre ~40 % strip of the viewport
    threshold: 0,
    triggerOnce: false,
  });

  return (
    <div ref={mountRef}>
      <Grow in={mounted} timeout={300 + index * 100}>
        <Paper
          ref={focusRef}
          className='skill-card'
          elevation={focused && isMobile ? 18 : 12}
          style={{ padding: '16px' }}
          sx={{
            transition:
              'transform 0.35s ease, opacity 0.35s ease, box-shadow 0.35s ease',
            // Mobile scroll-focus spotlight
            ...(isMobile && {
              transform: focused ? 'scale(1.04)' : 'scale(0.95)',
              opacity: focused ? 1 : 0.55,
            }),
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
                  <ListItemIcon style={{ minWidth: '30px', marginRight: '5px' }}>
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
  );
}

function SkillsLists() {
  const theme = useTheme();
  // Scroll-focus effect only applies on true touch/mobile screens
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid
      container
      spacing={2}
      sx={{
        // Hover focus effect — scoped to pointer devices only so it never
        // conflicts with the JS-driven scroll-focus on touch screens.
        '@media (hover: hover)': {
          '&:hover .skill-card': {
            transform: 'scale(0.96)',
            opacity: 0.72,
          },
          '& .skill-card:hover': {
            transform: 'scale(1.04) !important',
            opacity: '1 !important',
            boxShadow: '0 8px 28px rgba(0,0,0,0.18) !important',
          },
        },
      }}
    >
      {skillCategories.map((category, index) => (
        <Grid size={{ xs: 10, sm: 6, md: 6, lg: 3 }} key={category.title}>
          <SkillCard category={category} index={index} isMobile={isMobile} />
        </Grid>
      ))}
    </Grid>
  );
}

export default SkillsLists;
