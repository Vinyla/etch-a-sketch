import React, { useState } from 'react';
import GridElement from './GridElement';

const SketchApp = () => {
  const [grid, setGrid] = useState(16);
  const [isRandom, setIsRandom] = useState(false);
  const [isCleared, setIsCleared] = useState(false);

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

  const resetBoard = () => {
    let gridNumbers = prompt('How many square per sides? min:16 max:100');
    if (gridNumbers) {
      setGrid(gridNumbers);
    } else setGrid(grid);
    setIsCleared(true);
  };

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
      <div className='buttons'>
        <button onClick={resetBoard}>Reset Board</button>
        <button onClick={() => setIsRandom(false)}>Black</button>
        <button onClick={() => setIsRandom(true)}>Random Color</button>
        <button onClick={() => setIsCleared(true)}>Clear Board</button>
      </div>
      <div className='board'>
        <div style={gridTemplate}>{gridBoard(grid * grid)}</div>
      </div>
    </div>
  );
};

export default SketchApp;
