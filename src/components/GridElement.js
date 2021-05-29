import React, { useState, useEffect } from 'react';

const GridElement = ({ isRandom, isCleared, setIsCleared }) => {
  const [color, setcolor] = useState();

  const randomizeColor =
    '#' + Math.floor(Math.random() * 16777215).toString(16);

  useEffect(() => {
    if (isCleared) {
      setcolor({ backgroundColor: 'white' });
    }
  }, [isCleared]);

  const changeColor = () => {
    if (isRandom) {
      setcolor({ backgroundColor: randomizeColor });
    } else {
      setcolor({ backgroundColor: 'black' });
    }
    if (isCleared) {
      setIsCleared(false);
    }
  };

  return (
    <div
      style={color}
      className='grid-element'
      onMouseEnter={changeColor}
    ></div>
  );
};

export default GridElement;
