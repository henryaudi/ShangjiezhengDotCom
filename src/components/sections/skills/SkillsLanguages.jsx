import { Typography } from '@mui/material';
import TranslateIcon from '@mui/icons-material/Translate';

import { programmingLanguages } from '../../../data/skills';
import { colors } from '../../../theme/colors';

function SkillsLanguages() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        paddingBottom: '1em',
        borderBottom: `1px solid ${colors.border}`,
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
      <span>{programmingLanguages.join(', ')}</span>
    </div>
  );
}

export default SkillsLanguages;
