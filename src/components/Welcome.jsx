import { Typography, Stack, Box } from '@mui/material';
import TerminalIcon from '@mui/icons-material/Terminal';
import StorageIcon from '@mui/icons-material/Storage';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import PsychologyIcon from '@mui/icons-material/Psychology';
import MemoryIcon from '@mui/icons-material/Memory';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';

function Welcome() {
  return (
    <Stack spacing={2}>
      <div>
        <Typography variant='h4' component='h1' style={{ fontWeight: 'bold' }}>
          Welcome to Shangjie (Henry) Zheng&apos;s homepage!
        </Typography>
      </div>
      <div>
        <Typography variant='body1' style={{ marginBottom: '0px' }}>
          I am a software developer working with Energy Management System {' ('}
          EMS {') '}and Battery Management Systems {'('}BMS{')'} with focus on
          control systems software modeling and development. I earned my Master
          of Science degree in Computer Science at{' '}
          <a
            href='https://www.smu.edu/lyle'
            target='_blank'
            rel='noopener noreferrer'
            style={{ color: '#27beb4' }}
          >
            Lyle School of Engineering
          </a>
          {', '}
          <a
            href='https://www.smu.edu'
            target='_blank'
            rel='noopener noreferrer'
            style={{ color: '#27beb4' }}
          >
            Southern Methodist University (SMU)
          </a>
          . Before attending SMU, I studied Mechanical Engineering at{' '}
          <a
            href='https://umkc.edu'
            target='_blank'
            rel='noopener noreferrer'
            style={{ color: '#27beb4' }}
          >
            University of Missouri - Kansas City (UMKC){' '}
          </a>
          for my undergrad and was a mechanical engineer in glass manufacturing
          industry for a year right out of college.
          <br />
        </Typography>
      </div>
      <div>
        <Typography variant='body1' style={{ marginBottom: '0px' }}>
          I always see myself as a passionate advocate for embracing innovative
          technology to solve real-world challenges. My technical R&D interests
          include:
        </Typography>
      </div>
      <div style={{ paddingLeft: '2em', marginTop: '0.75em' }}>
        <Interests />
      </div>
      <div>
        For more information, please check out my CV attached here:{' '}
        <a
          href='/Shangjie_resume.pdf'
          target='_blank'
          rel='noopener noreferrer'
          style={{ color: '#27beb4' }}
        >
          Shangjie_resume.pdf
        </a>
      </div>
    </Stack>
  );
}

function Interests() {
  return (
    <Stack spacing={1}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <MemoryIcon style={{ marginRight: '0.5em' }} /> Embedded Software
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <TerminalIcon style={{ marginRight: '0.5em' }} /> Full-stack Development
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <SmartToyIcon style={{ marginRight: '0.5em' }} /> Machine Learning & NLP
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <SettingsSuggestIcon style={{ marginRight: '0.5em' }} /> Control Systems
        Software & Model-Based Design
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginTop: '-5px' }}>
        <Typography variant='h5'>...</Typography>
      </div>
    </Stack>
  );
}

export default Welcome;
