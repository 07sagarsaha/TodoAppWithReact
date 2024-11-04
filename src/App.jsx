import { useEffect, useState } from "react";
import "./App.css";
import TodoInput from "./componebts/TodoInput";
import TodoList from "./componebts/TodoList";

function App() {
  const [todolist, setTodoList] = useState(() => {
    const storedTodos = localStorage.getItem("todolist");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });
  const [todo, setTodo] = useState("");
  const handleAdd = (todo) => {
    setTodoList([...todolist, { text: todo, completed: false }]);
  };

  const handleDelate = (todoIndex) => {
    const newTodo = todolist.filter((val, index) => {
      return index !== todoIndex;
    });
    setTodoList(newTodo);
  };
  const handleEdeit = (index) => {
    const newTodo = todolist[index];
    setTodo(newTodo);
    handleDelate(index);
  };
  const handleToggleComplete = (index) => {
    const newTodo = todolist.map((todo, i) => {
      if (i === index) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodoList(newTodo);
  };
  useEffect(() => {
    localStorage.setItem("todolist", JSON.stringify(todolist));
  }, [todolist]);

  return (
    <>
      <TodoInput handleAdd={handleAdd} todo={todo} setTodo={setTodo} />
      <TodoList
        todolist={todolist}
        handleDelate={handleDelate}
        handleEdeit={handleEdeit}
        handleToggleComplete={handleToggleComplete}
      />
    </>
  );
}

export default App;
