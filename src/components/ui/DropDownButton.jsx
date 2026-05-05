/* eslint-disable react/prop-types */
import { Box, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { colors } from '../../theme/colors';

function DropDownButton({ open, setOpen, buttonTitle }) {
  const handleToggle = () => setOpen((prev) => !prev);

  return (
    <Box
      role='button'
      tabIndex={0}
      onClick={handleToggle}
      onKeyDown={(e) => e.key === 'Enter' && handleToggle()}
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 1,
        cursor: 'pointer',
        mt: '8px',
        px: 1.75,
        py: 0.75,
        borderRadius: '2px',           // sharp, angular
        border: '2px solid',
        borderColor: open ? colors.primary : colors.primary,
        backgroundColor: open ? colors.primary : 'transparent',
        color: open ? 'white' : colors.primary,
        transition: 'background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease',
        userSelect: 'none',
        '&:hover': {
          borderColor: colors.primary,
          backgroundColor: colors.primary,
          color: 'white',
        },
      }}
    >
      <Typography
        variant='body2'
        sx={{
          fontWeight: 700,
          fontSize: '0.75rem',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          lineHeight: 1,
        }}
      >
        {buttonTitle}
      </Typography>
      <ExpandMoreIcon
        sx={{
          fontSize: '1rem',
          transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
          transition: 'transform 0.3s ease',
        }}
      />
    </Box>
  );
}

export default DropDownButton;
