import React, { useState } from "react";
import "./Keyboard.css";

const Keyboard = ({ randomWord, onChildData }) => {
  const [value, setValue] = useState("");
  
  let word = "";
  const handleKeyPress = (key) => {
    setValue(value + key);
    word += value + key;

    if (randomWord.length == word.length) {
      onChildData(word); // sending word to the parent component
      setValue(""); // emptying the input field
    }
  };

  const handleBackspace = () => {
    setValue(value.slice(0, -1));
  };

  const keys = [
    ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
    ["z", "x", "c", "v", "b", "n", "m"],
  ];

  return (
    <div className="keyboard">
      {/* <button onClick={() => onChildData(value)}>Send Data to Parent</button> */}
      <input type="text" value={value} placeholder="Enter word here" />
      {keys.map((row, index) => (
        <div key={index} className="keyboard_row">
          {row.map((key) => (
            <button key={key} onClick={() => handleKeyPress(key)}>
              {key}
            </button>
          ))}
        </div>
      ))}
      <button onClick={handleBackspace} className="backspace">
        Backspace
      </button>
    </div>
  );
};

export { Keyboard };
