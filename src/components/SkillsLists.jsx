import {
  List,
  ListItem,
  ListItemIcon,
  Stack,
  ListItemText,
  Paper,
} from '@mui/material';
import Grid from '@mui/material/Grid2';

import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
import CustomSvgIcon from './CustomSvgIcon';
import CodeIcon from '@mui/icons-material/Code';
import LanIcon from '@mui/icons-material/Lan';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import StorageIcon from '@mui/icons-material/Storage';
import DevicesIcon from '@mui/icons-material/Devices';
import ModelTrainingIcon from '@mui/icons-material/ModelTraining';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';

function SkillsLists() {
  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 10, sm: 6, md: 6, lg: 3 }}>
        <Paper elevation={12} style={{ padding: '16px' }}>
          <Stack spacing={1}>
            <div
              style={{
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
                marginBottom: '0px',
              }}
            >
              <DevicesIcon sx={{ mr: '0.25em' }} /> Software Development
            </div>
            <List style={{ paddingTop: 0 }}>
              <ListItem style={{ paddingLeft: '1em', paddingTop: '6.5px' }}>
                <ListItemIcon style={{ minWidth: '30px', marginRight: '5px' }}>
                  <CustomSvgIcon path='/logo-react-svgrepo-com.svg' />
                </ListItemIcon>
                <ListItemText primary='React' />
              </ListItem>
              <ListItem
                style={{
                  paddingLeft: '1em',
                  paddingTop: '6.5px',
                }}
              >
                <ListItemIcon style={{ minWidth: '30px', marginRight: '5px' }}>
                  <CustomSvgIcon path='/spring-boot-svgrepo-com.svg' />
                </ListItemIcon>
                <ListItemText primary='Spring Boot' />
              </ListItem>
              <ListItem style={{ paddingLeft: '1em', paddingTop: '6.5px' }}>
                <ListItemIcon style={{ minWidth: '30px', marginRight: '5px' }}>
                  <CustomSvgIcon path='/node-js-svgrepo-com.svg' />
                </ListItemIcon>
                <ListItemText primary='Node.JS' />
              </ListItem>
              <ListItem style={{ paddingLeft: '1em', paddingTop: '6.5px' }}>
                <ListItemIcon style={{ minWidth: '30px', marginRight: '5px' }}>
                  <CustomSvgIcon path='/expressjs-icon.svg' />
                </ListItemIcon>
                <ListItemText primary='Express.JS' />
              </ListItem>
              <ListItem
                style={{
                  paddingLeft: '1em',
                  paddingTop: '6.5px',
                  paddingRight: '0',
                }}
              >
                <ListItemIcon style={{ minWidth: '30px', marginRight: '5px' }}>
                  <CustomSvgIcon path='/django-icon-svgrepo-com.svg' />
                </ListItemIcon>
                <ListItemText primary='Django/Django REST' />
              </ListItem>
            </List>
          </Stack>
        </Paper>
      </Grid>

      <Grid size={{ xs: 10, sm: 6, md: 6, lg: 3 }}>
        <Paper elevation={12} style={{ padding: '16px' }}>
          <Stack spacing={1}>
            <div
              style={{
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
                marginBottom: '0px',
              }}
            >
              <StorageIcon sx={{ mr: '0.25em' }} /> Database/Storage
            </div>
            <List style={{ paddingTop: 0 }}>
              <ListItem style={{ paddingLeft: '1em', paddingTop: '6.5px' }}>
                <ListItemIcon style={{ minWidth: '30px', marginRight: '5px' }}>
                  <CustomSvgIcon path='/mysql-svgrepo-com.svg' />
                </ListItemIcon>
                <ListItemText primary='MySQL' />
              </ListItem>
              <ListItem style={{ paddingLeft: '1em', paddingTop: '6.5px' }}>
                <ListItemIcon style={{ minWidth: '30px', marginRight: '5px' }}>
                  <CustomSvgIcon path='/mongodb-svgrepo-com.svg' />
                </ListItemIcon>
                <ListItemText primary='MongoDB' />
              </ListItem>
              <ListItem style={{ paddingLeft: '1em', paddingTop: '6.5px' }}>
                <ListItemIcon style={{ minWidth: '30px', marginRight: '5px' }}>
                  <CustomSvgIcon path='/sqlite-svgrepo-com.svg' />
                </ListItemIcon>
                <ListItemText primary='SQLite' />
              </ListItem>
              <ListItem style={{ paddingLeft: '1em', paddingTop: '6.5px' }}>
                <ListItemIcon style={{ minWidth: '30px', marginRight: '5px' }}>
                  <CustomSvgIcon path='/postgresql-svgrepo-com.svg' />
                </ListItemIcon>
                <ListItemText primary='PostgreSQL' />
              </ListItem>
              <ListItem style={{ paddingLeft: '1em', paddingTop: '6.5px' }}>
                <ListItemIcon style={{ minWidth: '30px', marginRight: '5px' }}>
                  <CustomSvgIcon path='/redis-svgrepo-com.svg' />
                </ListItemIcon>
                <ListItemText primary='Redis' />
              </ListItem>
            </List>
          </Stack>
        </Paper>
      </Grid>

      <Grid size={{ xs: 10, sm: 6, md: 6, lg: 3 }}>
        <Paper elevation={12} style={{ padding: '16px' }}>
          <Stack spacing={1}>
            <div
              style={{
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
                marginBottom: '0px',
              }}
            >
              <DynamicFeedIcon sx={{ mr: '0.25em' }} /> Development Platforms
            </div>
            <List style={{ paddingTop: 0 }}>
              <ListItem
                style={{
                  paddingLeft: '1em',
                  paddingTop: '6.5px',
                  paddingRight: '0',
                }}
              >
                <ListItemIcon style={{ minWidth: '30px', marginRight: '5px' }}>
                  <CustomSvgIcon path='/aws-svgrepo-com.svg' />
                </ListItemIcon>
                <ListItemText primary='Amazon Web Services' />
              </ListItem>
              <ListItem style={{ paddingLeft: '1em', paddingTop: '6.5px' }}>
                <ListItemIcon style={{ minWidth: '30px', marginRight: '5px' }}>
                  <CustomSvgIcon path='/docker-svgrepo-com.svg' />
                </ListItemIcon>
                <ListItemText primary='Docker' />
              </ListItem>
              <ListItem style={{ paddingLeft: '1em', paddingTop: '6.5px' }}>
                <ListItemIcon style={{ minWidth: '30px', marginRight: '5px' }}>
                  <CustomSvgIcon path='/postman-svgrepo-com.svg' />
                </ListItemIcon>
                <ListItemText primary='Postman' />
              </ListItem>
              <ListItem style={{ paddingLeft: '1em', paddingTop: '6.5px' }}>
                <ListItemIcon style={{ minWidth: '30px', marginRight: '5px' }}>
                  <CustomSvgIcon path='/git-svgrepo-com.svg' />
                </ListItemIcon>
                <ListItemText primary='Git/Github' />
              </ListItem>
              <ListItem style={{ paddingLeft: '1em', paddingTop: '6.5px' }}>
                <ListItemIcon style={{ minWidth: '30px', marginRight: '5px' }}>
                  <CustomSvgIcon path='st_logo.svg' />
                </ListItemIcon>
                <ListItemText primary='STM32Cube' />
              </ListItem>
            </List>
          </Stack>
        </Paper>
      </Grid>

      <Grid size={{ xs: 10, sm: 6, md: 6, lg: 3 }}>
        <Paper elevation={12} style={{ padding: '16px' }}>
          <Stack spacing={1}>
            <div
              style={{
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
                marginBottom: '0px',
              }}
            >
              <ModelTrainingIcon sx={{ mr: '0.25em' }} /> Model-Based Design
            </div>
            <List style={{ paddingTop: 0 }}>
              <ListItem style={{ paddingLeft: '1em', paddingTop: '6.5px' }}>
                <ListItemIcon style={{ minWidth: '30px', marginRight: '5px' }}>
                  <CustomSvgIcon path='/mathworks-svgrepo-com.svg' />
                </ListItemIcon>
                <ListItemText primary='Simulink' />
              </ListItem>
              <ListItem style={{ paddingLeft: '1em', paddingTop: '6.5px' }}>
                <ListItemIcon style={{ minWidth: '30px', marginRight: '5px' }}>
                  <CustomSvgIcon path='/mathworks-svgrepo-com.svg' />
                </ListItemIcon>
                <ListItemText primary='Simscape' />
              </ListItem>
              <ListItem style={{ paddingLeft: '1em', paddingTop: '6.5px' }}>
                <ListItemIcon style={{ minWidth: '30px', marginRight: '5px' }}>
                  <CustomSvgIcon path='/solidworks-svgrepo-com.svg' />
                </ListItemIcon>
                <ListItemText primary='Solidworks' />
              </ListItem>
              <ListItem style={{ paddingLeft: '1em', paddingTop: '6.5px' }}>
                <ListItemIcon style={{ minWidth: '30px', marginRight: '5px' }}>
                  <CustomSvgIcon path='/ansys-svgrepo-com.svg' />
                </ListItemIcon>
                <ListItemText primary='ANSYS Fluent' />
              </ListItem>
              <ListItem style={{ paddingLeft: '1em', paddingTop: '6.5px' }}>
                <ListItemIcon style={{ minWidth: '30px', marginRight: '5px' }}>
                  <CustomSvgIcon path='/autodesk-svgrepo-com.svg' />
                </ListItemIcon>
                <ListItemText primary='Auto CAD' />
              </ListItem>
            </List>
          </Stack>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default SkillsLists;
