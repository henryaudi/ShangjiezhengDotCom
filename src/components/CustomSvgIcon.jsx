import React from 'react';

function CustomSvgIcon({ path, style }) {
  return (
    <img
      src={path}
      alt=''
      style={{
        width: '24px',
        height: '24px',
        objectFit: 'contain',
        ...style,
      }}
    />
  );
}

export default CustomSvgIcon;
