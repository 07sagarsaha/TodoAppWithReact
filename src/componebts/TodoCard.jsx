import React from "react";
import { IoMdTrash } from "react-icons/io";
import { MdEdit } from "react-icons/md";

function TodoCard({
  todo,
  handleDelate,
  handleEdeit,
  index,
  handleToggleComplete,
}) {
  return (
    <div className="todo-card">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => handleToggleComplete(index)}
      />
      <p style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
        {todo.text}
      </p>
      <div className="todo-card-btn">
        <button
          onClick={() => {
            handleEdeit(index);
          }}
        >
          <MdEdit />
        </button>
        <button
          onClick={() => {
            handleDelate(index);
          }}
        >
          <IoMdTrash />
        </button>
      </div>
    </div>
  );
}

export default TodoCard;
