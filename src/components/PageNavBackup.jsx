// src: https://mui.com/material-ui/react-app-bar/
// Original Author: MUI
// Modifications were made by Shangjie Zheng

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

const pages = ['About', 'Experience', 'Skills', 'Projects'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const appBarRef = React.useRef(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleScrollToSelection = (selectionId) => {
    const section = document.getElementById(selectionId);
    if (section) {
      let offsetPosition = section.offsetTop;

      if (window.matchMedia('(max-width: 600px)').matches) {
        const appBarHeight = appBarRef.current
          ? appBarRef.current.clientHeight
          : 0;
        offsetPosition -= appBarHeight;
      }

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    handleCloseNavMenu();
  };

  return (
    <AppBar
      ref={appBarRef}
      position='static'
      sx={{
        bgcolor: 'darkslategray',
      }}
    >
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Box
            size='large'
            aria-label='account of current user'
            aria-controls='menu-appbar'
            aria-haspopup='true'
            color='inherit'
            sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
          >
            <img
              src='/logo_white_text.png'
              alt='Logo'
              style={{ height: '5.2rem', width: 'auto' }}
            />
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={() => handleScrollToSelection(page.toLowerCase())}
                >
                  <Typography textAlign='center'>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            variant='h5'
            component='a'
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <img
              src='/logo_white_text.png'
              alt='Logo'
              style={{ height: '5.2rem', width: 'auto' }}
            />
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handleScrollToSelection(page.toLowerCase())}
                sx={{
                  my: 2,
                  mx: 1,
                  fontSize: '1rem',
                  color: 'white',
                  display: 'block',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  },
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
