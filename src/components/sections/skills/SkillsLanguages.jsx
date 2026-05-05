import { Box, Chip } from '@mui/material';
import TranslateIcon from '@mui/icons-material/Translate';

import { programmingLanguages } from '../../../data/skills';
import { colors } from '../../../theme/colors';

// Language chips are larger and tinted to signal they are primary skills,
// distinct from the smaller project tech-stack chips.
const langChipSx = {
  mx: '0.25em',
  my: '0.2em',
  height: '28px',
  borderRadius: '3px',
  border: '1.5px solid',
  borderColor: `${colors.primary}55`,
  bgcolor: `${colors.primary}0e`,
  color: colors.primary,
  fontFamily: "'SFMono-Regular', 'Menlo', 'Consolas', 'Courier New', monospace",
  fontSize: '0.8rem',
  fontWeight: 600,
  letterSpacing: '0.02em',
  transition: 'background-color 0.15s ease, color 0.15s ease, border-color 0.15s ease',
  '& .MuiChip-label': { px: '10px' },
  '&:hover': {
    bgcolor: colors.primary,
    borderColor: colors.primary,
    color: 'white',
    cursor: 'default',
  },
};

function SkillsLanguages() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        pb: '1em',
        borderBottom: `1px solid ${colors.border}`,
        gap: 0,
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', mr: 1.5, flexShrink: 0 }}>
        <TranslateIcon sx={{ fontSize: '1.4rem', mr: 0.75 }} />
        <Box component='span' sx={{ fontWeight: 700, fontSize: '1rem', whiteSpace: 'nowrap' }}>
          Languages:
        </Box>
      </Box>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', rowGap: '0.25em' }}>
        {programmingLanguages.map((lang) => (
          <Chip key={lang} label={lang} size='small' sx={langChipSx} />
        ))}
      </Box>
    </Box>
  );
}

export default SkillsLanguages;
