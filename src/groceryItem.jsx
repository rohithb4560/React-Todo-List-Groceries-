import React from 'react';
const TodosItem = ({ title, ind, handleDelete }) => {
  return (
    <div>
      {title}
      <button
        onClick={() => {
          handleDelete(ind);
        }}
      >
        Delete
      </button>
    </div>
  );
};
export default TodosItem;
