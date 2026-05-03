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
      <Grid container spacing={2} style={{ position: 'sticky' }}>
        <Grid
          size={{ xs: 5, sm: 5, md: 12 }}
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
              overflow: 'hidden',
              backgroundColor: 'transparent',
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
                filter: 'blur(14px)',
                transform: 'scale(1.06)',
                opacity: placeholderLoaded ? 1 : 0,
                transition: 'opacity 0.3s ease',
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
        <Grid size={{ xs: 7, sm: 7, md: 12 }}>
          <Stack spacing={2}>
            <div
              style={{
                borderBottom: '1px solid grey',
                paddingBottom: '8px',
              }}
            >
              <Typography
                variant='h5'
                component='h2'
                style={{ fontWeight: 'bold' }}
              >
                {profile.name}
                <br />
                (Henry)
              </Typography>
              <Typography
                variant='body2'
                sx={{ mt: '10px', lineHeight: '1.6' }}
              >
                MS. Computer Science
                <br />
                Lyle School of Engineering
                <br />
                Southern Methodist University
              </Typography>
            </div>
            <div style={{ marginTop: '0' }}>
              <ContactInfo />
            </div>
          </Stack>
        </Grid>
      </Grid>
    </StickyBox>
  );
}

export default LeftPanel;
