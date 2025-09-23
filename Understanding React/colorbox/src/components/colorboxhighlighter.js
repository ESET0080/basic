import React, { useRef, useState } from 'react';

const ColorBoxHighlighter = () => {
  
  const boxRefs = [useRef(null), useRef(null), useRef(null)];
  
  
  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  
  const handleHighlightNext = () => {
   
    if (highlightedIndex !== -1 && boxRefs[highlightedIndex].current) {
      boxRefs[highlightedIndex].current.style.border = 'none';
    }

    
    const nextIndex = (highlightedIndex + 1) % boxRefs.length;

    
    if (boxRefs[nextIndex].current) {
      boxRefs[nextIndex].current.style.border = '4px solid #c6f163ff'; 
      boxRefs[nextIndex].current.style.boxShadow = '0 0 20px #f1b863ff';
    }

    
    setHighlightedIndex(nextIndex);
  };

  return (
    <div className=" ">
      <h1 className=" ">
        Highlighter Assignment
      </h1>
      
      
      <div className=" flex space-x-8 my-8">
        <div
          ref={boxRefs[0]}
          className="  "
          style={{ backgroundColor: '#19f436ff' }} // green
        >
          <span className=" ">Green</span>
        </div>
        <div
          ref={boxRefs[1]}
          className=" "
          style={{ backgroundColor: '#120fd0ff' }} // blue
        >
          <span className="  ">Blue</span>
        </div>
        <div
          ref={boxRefs[2]}
          className=" "
          style={{ backgroundColor: '#d6281bff' }} // red
        >
          <span className=" ">Red</span>
        </div>
      </div>

      
      <button
        onClick={handleHighlightNext}
        className=" "
      >
        Highlight Next
      </button>
    </div>
  );
};

export default ColorBoxHighlighter;