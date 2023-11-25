import React, { useState } from 'react';

const ClickMeButton = () => {
  const [clickCount, setClickCount] = useState(0);
  const [clickedButton, setClickedButton] = useState(null);

  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };


  const handleClick = () => {
    setClickCount(clickCount + 1);
  };
  const handleButtonClick = (buttonNumber) => {
    setClickedButton(buttonNumber);
  };

  
  const getMessage = () => {
    return clickCount % 2 !== 0 ? 'Clicked' : 'Not Clicked';
  };

  return (
    <div>
      <button onClick={handleClick}>Toggle</button>
      <p>{getMessage()}</p>
      <button onClick={() => handleButtonClick(1)}>Button1</button>
      <button onClick={() => handleButtonClick(2)}>Button2</button>
      <button onClick={() => handleButtonClick(3)}>Button3</button>

      <p>{clickedButton ? `Button #${clickedButton} was clicked` : 'No button clicked'}</p>

      <h1>Counter: {counter}</h1>
      <button onClick={increment}>Inc</button>
      <button onClick={decrement}>Dec</button>
    </div>
  );
  

  
};


export default ClickMeButton;
