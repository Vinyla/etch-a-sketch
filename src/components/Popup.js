import React from 'react';

const Popup = ({
  setIsOpenPopup,
  submitGridSize,
  handleChange,
  errorMessage
}) => {
  return (
    <div className='popup-box'>
      <div className='box'>
        <span className='close-icon' onClick={() => setIsOpenPopup(false)}>
          x
        </span>
        <h3>How many squares per size?</h3>
        <p>min. 16 - max. 100</p>
        <input type='number' required onChange={handleChange} />
        <button onClick={submitGridSize}>Submit</button>
        <p>{errorMessage}</p>
      </div>
    </div>
  );
};

export default Popup;
