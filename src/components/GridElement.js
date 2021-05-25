import React, { useState } from 'react';

const mouseEnter = { backgroundColor: 'black' };
const mouseOut = { backgroundColor: 'white' };

const GridElement = () => {
  const [color, setColor] = useState(mouseOut);

  return (
    <div
      className='grid-element'
      style={color}
      onMouseEnter={() => setColor(mouseEnter)}></div>
  );
};

export default GridElement;
