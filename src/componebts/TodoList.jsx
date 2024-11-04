import React from "react";
import TodoCard from "./TodoCard";

function TodoList({
  todolist,
  handleDelate,
  handleEdeit,
  handleToggleComplete,
}) {
  return (
    <div>
      {todolist.map((todo, index) => {
        return (
          <TodoCard
            todo={todo}
            handleDelate={handleDelate}
            handleEdeit={handleEdeit}
            key={index}
            index={index}
            handleToggleComplete={handleToggleComplete}
          />
        );
      })}
    </div>
  );
}

export default TodoList;
