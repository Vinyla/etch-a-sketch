import React from 'react';

const Buttons = ({ setIsOpenPopup, setIsRandom, setIsCleared }) => {
  return (
    <div className='buttons'>
      <button onClick={() => setIsOpenPopup(true)}>Reset Board</button>
      <button onClick={() => setIsRandom(false)}>Black</button>
      <button onClick={() => setIsRandom(true)}>Random Color</button>
      <button onClick={() => setIsCleared(true)}>Clear Board</button>
    </div>
  );
};

export default Buttons;
