import React, { useState } from 'react';
import Buttons from './Buttons';
import GridElement from './GridElement';
import Popup from './Popup';

const SketchApp = () => {
  const min = 16;
  const max = 100;
  const [grid, setGrid] = useState(min);
  const [isRandom, setIsRandom] = useState(false);
  const [isCleared, setIsCleared] = useState(false);
  const [openPopup, setIsOpenPopup] = useState(false);
  const [inputValue, setInputValue] = useState();
  const [errorMessage, setErrorMessage] = useState(false);

  const gridBoard = (grid) => {
    const gridArray = [];
    for (let i = 0; i < grid; i++) {
      gridArray.push(
        <GridElement
          isCleared={isCleared}
          setIsCleared={setIsCleared}
          isRandom={isRandom}
          key={i}
        />
      );
    }
    return gridArray;
  };

  const submitGridSize = (e) => {
    setIsCleared(true);
    setIsOpenPopup(false);
    if (inputValue < 16 || inputValue > 100) {
      setErrorMessage(true);
    } else setGrid(inputValue);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  // let gridNumbers = prompt('How many square per sides? min:16 max:100');
  // if (gridNumbers < 16 || gridNumbers > 100) {
  //   alert('min 16 and max 100');
  // } else if (gridNumbers) {
  //   setGrid(gridNumbers);
  // } else setGrid(grid);

  // grid style
  const gridTemplate = {
    display: 'inline-grid',
    gridTemplateColumns: `repeat(${grid}, 1fr)`,
    width: '500px',
    height: '500px'
  };

  return (
    <div className='container'>
      <h2>Etch-A-Sketch</h2>
      <Buttons
        setIsOpenPopup={setIsOpenPopup}
        setIsRandom={setIsRandom}
        setIsCleared={setIsCleared}
      />
      {openPopup && (
        <Popup
          setIsOpenPopup={setIsOpenPopup}
          submitGridSize={submitGridSize}
          handleChange={handleChange}
          errorMessage={errorMessage}
        />
      )}
      <div className='board'>
        <div style={gridTemplate}>{gridBoard(grid * grid)}</div>
      </div>
    </div>
  );
};

export default SketchApp;
