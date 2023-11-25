import React, { useState } from 'react';

const DisplayTab= ({ table }) => {
    // const initialTab = ["hello", "world", "from", "react"];
    const [tab, setTab] = useState(table);
  
    const handleItemClick = (index) => {
      const updatedTab = tab.filter((_, i) => i !== index);
      setTab(updatedTab);
    };
  
    return (
      <ul>
        {tab.map((item, index) => (
          <li key={index} onClick={() => handleItemClick(index)}>
            Element {index + 1} is: {item}
          </li>
        ))}
      </ul>
    );
};

export default DisplayTab;
