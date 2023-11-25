import React, { useState } from 'react';

const DynamicDivForm = () => {
  const [divs, setDivs] = useState([]); 
  const [height, setHeight] = useState('');
  const [width, setWidth] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newDiv = {
      height: height,
      width: width,
      backgroundColor: backgroundColor
    };
    setDivs([...divs, newDiv]);
    setHeight('');
    setWidth('');
    setBackgroundColor('');
  };

  return (
    <div>
      <h2>Add a Dynamic Div</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Height:
          <input
            type="text"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </label>
        <label>
          Width:
          <input
            type="text"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
          />
        </label>
        <label>
          Background Color:
          <input
            type="text"
            value={backgroundColor}
            onChange={(e) => setBackgroundColor(e.target.value)}
          />
        </label>
        <button type="submit">Add Div</button>
      </form>

      <div className="dynamicDivs">
        {divs.map((div, index) => (
          <div
            key={index}
            style={{
              height: div.height,
              width: div.width,
              backgroundColor: div.backgroundColor,
              margin: '10px',
              padding: '10px',
              border: '1px solid black'
            }}
          >
            Div {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DynamicDivForm;
