import React, { useState } from 'react';
const TodosInput = ({ handleClick }) => {
  const [text, setText] = useState('');

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />

      <button
        onClick={() => {
          handleClick(text);
        }}
      >
        Add
      </button>
    </div>
  );
};
export default TodosInput;
