import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';

import PageNav from '../components/PageNav';
import LeftPanel from '../components/LeftPanel';
import RightPanel from '../components/RightPanel';
import Footer from '../components/Footer';
import { Box } from '@mui/material';
import GoUp from '../components/GoUp';

function HomePage() {
  return (
    <>
      <Box sx={{ display: { xs: 'none', sm: 'block' }, zIndex: 1000 }}>
        <PageNav />
      </Box>
      <Box
        sx={{
          position: 'sticky',
          top: 0,
          display: { xs: 'block', sm: 'none', md: 'none' },
          zIndex: 1000,
        }}
      >
        <PageNav />
      </Box>
      <Stack spacing={2}>
        <Grid container spacing={2} sx={{ px: { xs: 2, sm: 4, md: 6, lg: 8 } }}>
          <Grid item sm={12} md={3} lg={2}>
            <LeftPanel />
          </Grid>
          <Grid item sm={12} md={9} lg={10}>
            <RightPanel />
          </Grid>
        </Grid>
        <Box width='100%'>
          <Footer />
        </Box>
      </Stack>
      <Box>
        <GoUp />
      </Box>
    </>
  );
}

export default HomePage;
