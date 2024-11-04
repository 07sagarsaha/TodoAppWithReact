import React, { useState } from "react";

function TodoInput({ handleAdd, todo, setTodo }) {
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setTodo(e.target.value);
          console.log(e.target.value);
        }}
        value={todo}
      />
      <button
        onClick={() => {
          if (todo != "") {
            handleAdd(todo);
            setTodo("");
          } else {
            alert("add a todo");
          }
        }}
      >
        add
      </button>
    </div>
  );
}

export default TodoInput;
