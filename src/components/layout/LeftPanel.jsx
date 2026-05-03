import { useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import StickyBox from 'react-sticky-box';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { profile } from '../../data/profile';
import ContactInfo from '../ui/ContactInfo';

function LeftPanel() {
  const [placeholderLoaded, setPlaceholderLoaded] = useState(false);
  const [fullLoaded, setFullLoaded] = useState(false);

  return (
    <StickyBox offsetTop={10} offsetBottom={10}>
      <Grid container spacing={2} sx={{ position: 'sticky' }}>
        <Grid
          size={{ xs: 4, sm: 4, md: 12 }}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              width: '100%',
              aspectRatio: '1',
              position: 'relative',
              borderRadius: 1,
              // Only clip the corners once the full image has loaded — while
              // we're showing the blurred placeholder we want it to feather
              // out softly rather than sit inside a hard rectangle.
              overflow: fullLoaded ? 'hidden' : 'visible',
            }}
          >
            <img
              src={profile.portraitPlaceholder}
              alt=''
              aria-hidden='true'
              onLoad={() => setPlaceholderLoaded(true)}
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'blur(22px)',
                transform: 'scale(1.1)',
                opacity: placeholderLoaded && !fullLoaded ? 1 : 0,
                transition: 'opacity 0.4s ease',
                // Soft radial fade so the placeholder doesn't appear as a
                // sharp blurred rectangle while loading.
                maskImage:
                  'radial-gradient(ellipse at center, black 50%, transparent 92%)',
                WebkitMaskImage:
                  'radial-gradient(ellipse at center, black 50%, transparent 92%)',
                pointerEvents: 'none',
              }}
            />
            {placeholderLoaded && (
              <img
                src={profile.portrait}
                alt='portrait'
                onLoad={() => setFullLoaded(true)}
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  opacity: fullLoaded ? 1 : 0,
                  transition: 'opacity 0.5s ease',
                }}
              />
            )}
          </Box>
        </Grid>

        <Grid size={{ xs: 8, sm: 8, md: 12 }}>
          <Stack spacing={0}>
            <Box sx={{ borderBottom: '1px solid grey', pb: '10px' }}>
              <Typography
                variant='h5'
                component='h2'
                sx={{ fontWeight: 'bold' }}
              >
                {profile.name}
                <br />
                (Henry)
              </Typography>
              <Typography
                variant='body2'
                sx={{ mt: '10px', lineHeight: 1.6 }}
              >
                MS. Computer Science
                <br />
                Lyle School of Engineering
                <br />
                Southern Methodist University
              </Typography>
            </Box>
            <ContactInfo />
          </Stack>
        </Grid>
      </Grid>
    </StickyBox>
  );
}

export default LeftPanel;
