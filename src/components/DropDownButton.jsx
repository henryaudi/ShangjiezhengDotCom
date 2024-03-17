import { Box, IconButton, Typography } from '@mui/material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function DropDownButton({ open, setOpen, buttonTitle }) {
  const handleToggle = function () {
    setOpen((open) => !open);
  };

  return (
    <Box
      onClick={handleToggle}
      sx={{
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        border: '1px solid #ccc',
        borderRadius: '4px',
        backgroundColor: 'darkslategray',
        padding: '0px 8px',
        marginTop: '2px',
        maxWidth: 'fit-content',
        color: 'white',
        '&:hover': {
          backgroundColor: '#2f4f4f',
        },
      }}
    >
      <Typography
        variant='body1'
        style={{ fontSize: '0.875rem', marginLeft: '0em' }}
      >
        {buttonTitle}
      </Typography>
      <IconButton
        style={{
          color: 'white',
          padding: '4px',
          paddingRight: '0px',
          marginLeft: '2em',
        }}
      >
        <ExpandMoreIcon
          style={{
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s',
          }}
        />
      </IconButton>
    </Box>
  );
}

export default DropDownButton;
