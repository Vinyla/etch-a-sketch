import React from 'react';

const Buttons = ({resetBoard, setIsRandom, setIsCleared}) => {
  return (
    <div className='buttons'>
      <button onClick={resetBoard}>Reset Board</button>
      <button onClick={() => setIsRandom(false)}>Black</button>
      <button onClick={() => setIsRandom(true)}>Random Color</button>
      <button onClick={() => setIsCleared(true)}>Clear Board</button>
    </div>
  );
};

export default Buttons;