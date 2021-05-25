import React from 'react';

const ButtonSection = () => {

 const resetBoard = () => {
  let template = prompt('Chose grid size min: 16*16 max:100*100')
 }
 const blackColor = () => {
   alert('hello');
 };
 const randomBolor = () => {
   alert('hello');
 };
 const clearBoard = () => {
   alert('hello');
 };

 return(
  <div className='buttons'>
   <button onClick={resetBoard}>Reset Board</button>
   <button onClick={blackColor}>Black</button>
   <button onClick={randomBolor}>Random Color</button>
   <button onClick={clearBoard}>Clear Board</button>
  </div>
 )
}

export default ButtonSection;