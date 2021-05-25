import React from 'react';

const ButtonSection = () => {

 const resetBoard = () => {
  alert('hello')
 }
 return(
  <div className='buttons'>
   <button onClick={resetBoard}>Reset Board</button>
   <button>Black</button>
   <button>Random Color</button>
   <button>Clear Board</button>
  </div>
 )
}

export default ButtonSection;