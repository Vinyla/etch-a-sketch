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
      border: '20px solid #ce1212',
      display: 'inline-grid',
      gridTemplateColumns: `repeat(${grid}, 1fr)`
    };

  return (
    <div>
      <h3>Etch-A-Sketch</h3>
      <ButtonSection />
      <div style={gridTemplate}>{gridBoard(grid * grid)}</div>
    </div>
  );
};

export default SketchApp;
