import { useEffect, useState } from 'react';
import { Fab, Tooltip } from '@mui/material';

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function GoUp() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleShowScrollButton = () => {
      window.scrollY > 100 ? setShowButton(true) : setShowButton(false);
    };

    window.addEventListener('scroll', handleShowScrollButton);

    return () => {
      window.removeEventListener('scroll', handleShowScrollButton);
    };
  }, []);

  const scrollToTop = function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    showButton && (
      <Tooltip title='Scroll to top' placement='left'>
        <Fab
          color='primary'
          size='medium'
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: 30,
            right: 30,
            backgroundColor: 'darkslategray',
            color: 'white',
          }}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </Tooltip>
    )
  );
}

export default GoUp;
