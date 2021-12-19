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

    console.log("todo list array:", newTodoList);

    //change new todo
    setTodos(newTodoList);
  };

  const deleteTodo = (id) => {
    console.log("deleted id:", id);
    const deletedTodos = [...todos].filter((todo) => todo.id !== id);

    //change the list

    setTodos(deletedTodos);
  };

  return (
    <div>
      <TodoForm onSubmit={addTodo} />
      {/* send list of todos to todo components */}
      <Todo todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
};

export default TodoList;
