import React from "react";

const Todo = ({ todos }) => {
  return (
    <div className="singleTodo">
      {todos.map((todo) => (
        <h1>{todo.text}</h1>
      ))}
    </div>
  );
};

export default Todo;
