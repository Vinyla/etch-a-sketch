import React, { useState } from 'react';

const GridElement = () => {
  const [color, setColor] = useState({ backgroundColor: 'white' });
  const mouseEnter = { backgroundColor: 'black' };

  return (
    <div
      className='grid-element'
      style={color}
      onMouseEnter={() => setColor(mouseEnter)}
    ></div>
  );
};

export default GridElement;
