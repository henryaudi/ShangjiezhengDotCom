import React from 'react';

function CustomSvgIcon({ path }) {
  return (
    <img
      src={path}
      alt=''
      style={{
        width: '24px',
        height: '24px',
        objectFit: 'contain',
      }}
    />
  );
}

export default CustomSvgIcon;
