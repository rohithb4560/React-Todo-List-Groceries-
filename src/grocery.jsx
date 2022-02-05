import React, { useState } from 'react';
import TodosInput from './groceryInput.jsx';
import TodosItem from './groceryItem.jsx';
const Todos = () => {
  const [todos, setTodos] = useState([]);
  const handleClick = (text) => {
    setTodos([...todos, text]);
  };
  const handleDelete = (ind) => {
    const dup = [...todos];
    console.log(ind);
    dup.splice(ind, 1);
    console.log(dup);
    setTodos(dup);
    console.log('deleted Item successfully');
  };

  return (
    <div>
      <h1>Groceries</h1>
      <TodosInput handleClick={handleClick} />
      {todos.map((e, index) => {
        return (
          <div>
            <TodosItem
              key={index}
              title={e}
              ind={index}
              handleDelete={handleDelete}
            />
          </div>
        );
      })}
    </div>
  );
};
export default Todos;
