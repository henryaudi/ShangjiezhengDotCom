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
import Drawer from '@mui/material/Drawer';
import ContactsIcon from '@mui/icons-material/Contacts';
import WorkIcon from '@mui/icons-material/Work';
import ConstructionIcon from '@mui/icons-material/Construction';
import BuildIcon from '@mui/icons-material/Build';
import ListItemIcon from '@mui/material/ListItemIcon';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Divider from '@mui/material/Divider';

const pages = [
  { title: 'About', icon: <ContactsIcon /> },
  { title: 'Experience', icon: <WorkIcon /> },
  { title: 'Skills', icon: <ConstructionIcon /> },
  { title: 'Projects', icon: <BuildIcon /> },
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const appBarRef = React.useRef(null);

  const handleOpenDrawer = () => {
    setDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    handleCloseDrawer();
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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    handleCloseDrawer();
  };

  return (
    <>
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
                onClick={handleOpenDrawer}
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
                    key={page.title}
                    onClick={() =>
                      handleScrollToSelection(page.title.toLowerCase())
                    }
                  >
                    <Typography textAlign='center'>{page.title}</Typography>
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
                  key={page.title}
                  onClick={() =>
                    handleScrollToSelection(page.title.toLowerCase())
                  }
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
                  {page.title}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor='left'
        open={drawerOpen}
        onClose={handleCloseDrawer}
        PaperProps={{
          sx: {
            bgcolor: '#1F3F3F',
            color: 'white',
            width: 300,
          },
        }}
      >
        <Box
          sx={{
            width: 300,
            mt: '2em',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            overflowY: 'auto',
            flexGrow: 1,
          }}
          role='presentation'
          onClick={handleCloseDrawer}
          onKeyDown={handleCloseDrawer}
        >
          {pages.map((page) => (
            <MenuItem
              key={page.title}
              onClick={() => handleScrollToSelection(page.title.toLowerCase())}
              sx={{
                mt: '0.5em',
                mb: '0.5em',
                color: 'white',
                '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.1)' },
              }}
            >
              <ListItemIcon sx={{ color: 'white', mr: 1 }}>
                {page.icon}
              </ListItemIcon>
              <Typography textAlign='center'>{page.title}</Typography>
            </MenuItem>
          ))}
          <Divider sx={{ borderColor: '#646464', borderBottomWidth: 'thin' }} />
          <MenuItem
            onClick={() => window.open('mailto:shangjiehz@gmail.com')}
            sx={{
              color: 'white',
              '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.1)' },
            }}
          >
            <ListItemIcon sx={{ color: 'white', mr: 1 }}>
              <MailIcon />
            </ListItemIcon>
            <Typography textAlign='center'>Email</Typography>
          </MenuItem>
          <MenuItem
            onClick={() =>
              window.open('https://www.linkedin.com/in/shangjiezheng', '_blank')
            }
            sx={{
              mt: '1em',
              color: 'white',
              '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.1)' },
            }}
          >
            <ListItemIcon sx={{ color: 'white', mr: 1 }}>
              <LinkedInIcon />
            </ListItemIcon>
            <Typography textAlign='center'>LinkedIn</Typography>
          </MenuItem>
          <MenuItem
            onClick={() => window.open('https://github.com/henryaudi')}
            sx={{
              mt: '1em',
              color: 'white',
              '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.1)' },
            }}
          >
            <ListItemIcon sx={{ color: 'white', mr: 1 }}>
              <GitHubIcon />
            </ListItemIcon>
            <Typography textAlign='center'>GitHub</Typography>
          </MenuItem>
        </Box>

        <Box flexGrow={1} />

        <Box
          sx={{
            pb: '0em',
            textAlign: 'center',
          }}
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            });
            handleCloseDrawer();
          }}
        >
          <img
            src='/logo_white_text.png'
            alt='Logo'
            style={{ cursor: 'pointer', maxWidth: '100%', maxHeight: '72px' }}
          />
        </Box>
        <Box style={{ textAlign: 'center', paddingBottom: '1em' }}>
          <Typography
            variant='body2'
            component='p'
            sx={{ color: 'white', fonrSize: '0.5rem' }}
          >
            &copy; {new Date().getFullYear()} Shangjie Zheng. All rights
            reserved.
          </Typography>
        </Box>
      </Drawer>
    </>
  );
}

export default ResponsiveAppBar;
