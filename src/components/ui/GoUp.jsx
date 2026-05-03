import { Fab, Tooltip } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useScrollToTop } from '../../hooks/useScrollToTop';
import { colors } from '../../theme/colors';

function GoUp() {
  const { visible, scrollToTop } = useScrollToTop();

  return (
    visible && (
      <Tooltip title='Scroll to top' placement='left'>
        <Fab
          color='primary'
          size='medium'
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: 30,
            right: 30,
            backgroundColor: colors.primary,
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
