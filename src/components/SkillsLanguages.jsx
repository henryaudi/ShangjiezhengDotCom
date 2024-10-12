import { Typography } from '@mui/material';

import TranslateIcon from '@mui/icons-material/Translate';

function SkillsLanguages() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        paddingBottom: '1em',
        borderBottom: '1px solid #ccc',
      }}
    >
      <TranslateIcon />
      <Typography
        variant='h6'
        component='h4'
        style={{ marginLeft: '8px', marginRight: '10px' }}
      >
        Languages:
      </Typography>
      <span>
        Java, Python, C++, Embedded C, JavaScript, TypeScript, SQL, HTML, CSS,
        MATLAB
      </span>
    </div>
  );
}

export default SkillsLanguages;
