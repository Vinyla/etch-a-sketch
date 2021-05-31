import React from 'react';

const Popup = ({
  setIsOpenPopup,
  submitGridSize,
  handleChange,
  errorMessage,
  setErrorMessage,
  inputValue
}) => {
  return (
    <div className='popup-box'>
      <div className='box'>
        <span
          className='close-icon'
          onClick={() => {
            setIsOpenPopup(false);
            setErrorMessage(false);
          }}
        >
          x
        </span>
        <h3>How many squares per size?</h3>
        <input type='number' required onChange={handleChange} />
        <button disabled={!inputValue} onClick={submitGridSize}>
          Submit
        </button>
        {errorMessage && <p className='popupMessage'>min. 16 - max 100</p>}
      </div>
    </div>
  );
};

export default Popup;
