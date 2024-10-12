import {
  Grid,
  List,
  ListItem,
  ListItemIcon,
  Stack,
  ListItemText,
  Paper,
} from '@mui/material';

import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
import CustomSvgIcon from './CustomSvgIcon';
import CodeIcon from '@mui/icons-material/Code';
import LanIcon from '@mui/icons-material/Lan';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import StorageIcon from '@mui/icons-material/Storage';

function SkillsLists() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={10} sm={6} md={6} lg={3}>
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
              <ViewCarouselIcon sx={{ mr: '0.25em' }} /> Front-end
            </div>
            <List style={{ paddingTop: 0 }}>
              <ListItem style={{ paddingLeft: '1em', paddingTop: '6.5px' }}>
                <ListItemIcon style={{ minWidth: '30px', marginRight: '5px' }}>
                  <CustomSvgIcon path='/logo-react-svgrepo-com.svg' />
                </ListItemIcon>
                <ListItemText primary='React' />
              </ListItem>
              <ListItem style={{ paddingLeft: '1em', paddingTop: '6.5px' }}>
                <ListItemIcon style={{ minWidth: '30px', marginRight: '5px' }}>
                  <CustomSvgIcon path='/javascript-155-svgrepo-com.svg' />
                </ListItemIcon>
                <ListItemText primary='Vanilla JS' />
              </ListItem>
              <ListItem style={{ paddingLeft: '1em', paddingTop: '6.5px' }}>
                <ListItemIcon style={{ minWidth: '30px', marginRight: '5px' }}>
                  <CodeIcon />
                </ListItemIcon>
                <ListItemText primary='HTML/CSS' />
              </ListItem>
            </List>
          </Stack>
        </Paper>
      </Grid>

      <Grid item xs={10} sm={6} md={6} lg={3}>
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
              <LanIcon sx={{ mr: '0.25em' }} /> Back-end
            </div>
            <List style={{ paddingTop: 0 }}>
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

      <Grid item xs={10} sm={6} md={6} lg={3}>
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
                  <CustomSvgIcon path='/bucket-svgrepo-com.svg' />
                </ListItemIcon>
                <ListItemText primary='Amazon S3' />
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

      <Grid item xs={10} sm={6} md={6} lg={3}>
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
              <SmartToyIcon sx={{ mr: '0.25em' }} /> More Cool Stuff
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
                  <CustomSvgIcon path='/python-svgrepo-com.svg' />
                </ListItemIcon>
                <ListItemText primary='NLTK' />
              </ListItem>
              <ListItem style={{ paddingLeft: '1em', paddingTop: '6.5px' }}>
                <ListItemIcon style={{ minWidth: '30px', marginRight: '5px' }}>
                  <CustomSvgIcon path='/python-svgrepo-com.svg' />
                </ListItemIcon>
                <ListItemText primary='spaCy' />
              </ListItem>
              <ListItem style={{ paddingLeft: '1em', paddingTop: '6.5px' }}>
                <ListItemIcon style={{ minWidth: '30px', marginRight: '5px' }}>
                  <CustomSvgIcon path='/postman-svgrepo-com.svg' />
                </ListItemIcon>
                <ListItemText primary='Postman' />
              </ListItem>
            </List>
          </Stack>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default SkillsLists;
