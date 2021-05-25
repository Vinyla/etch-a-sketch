import React from 'react';
import ButtonSection from './ButtonSection';
import GridElement from './GridElement';

const SketchApp = () => {
  const grid = 50;

  const gridBoard = (grid) => {
    const gridArray = [];
    for (let i = 0; i < grid; i++) {
      gridArray.push(<GridElement key={i} />);
    }
    return gridArray;
  };

    const gridTemplate = {
      display: 'inline-grid',
      gridTemplateColumns: `repeat(${grid}, 1fr)`,
      width: '500px',
      height: '500px'
    };

  return (
    <div className='container'>
      <h2>Etch-A-Sketch</h2>
      <ButtonSection />
      <div className='board'>
        <div style={gridTemplate}>{gridBoard(grid * grid)}</div>
      </div>
    </div>
  );
};

export default SketchApp;
