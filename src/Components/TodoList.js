import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const TodoList = () => {
  const [todos, setTodos] = useState([]); //list of todo;

  const addTodo = (todo) => {
    console.log("todo:", todo);
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodoList = [todo, ...todos];

    //change new todo
    setTodos(newTodoList);
  };
  return (
    <div>
      <TodoForm onSubmit={addTodo} />
      {/* send list of todos to todo components */}
      <Todo todos={todos} />
    </div>
  );
};

export default TodoList;
