import { Backspace, Edit } from "@mui/icons-material";
import React from "react";

const Todo = ({ todos, deleteTodo }) => {
  return (
    <div className="singleTodo">
      {todos.map((todo) => (
        <div key={todo.id} className="singleTodo">
          <h1>{todo.text}</h1>
          <Edit />
          <Backspace onClick={() => deleteTodo(todo.id)} />
        </div>
      ))}
    </div>
  );
};

export default Todo;
