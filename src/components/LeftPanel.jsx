import { useEffect, useRef, useState } from 'react';
import { Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import StickyBox from 'react-sticky-box';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import Portrait from '../../public/portrait_2024.jpg';
import PortraitPlaceholder from '../../public/portrait_2024_placeholder.jpg';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import ContactInfo from './ContactInfo';

function LeftPanel() {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsLoaded(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) observer.observe(imgRef.current);

    return () => {
      if (imgRef.current) observer.disconnect();
    };
  }, []);

  return (
    <StickyBox offsetTop={10} offsetBottom={10}>
      <Grid container spacing={2} style={{ position: 'sticky' }}>
        <Grid
          size={{ xs: 4, sm: 4, md: 12 }}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img
            ref={imgRef}
            src={isLoaded ? Portrait : PortraitPlaceholder}
            alt='portrait'
            style={{
              width: '100%',
              maxWidth: '100%',
              transition: 'filter 0.3s ease-in-out',
              filter: isLoaded ? 'blur(0)' : 'blur(10px)',
            }}
          />
          {/* <LazyLoadImage
            src={Portrait}
            placeholderSrc={PortraitPlaceholder}
            alt='portrait'
            effect='blur'
            style={{ width: '100%', maxWidth: '100%' }}
          /> */}
        </Grid>
        <Grid size={{ xs: 8, sm: 8, md: 12 }}>
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
                Shangjie Zheng
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
