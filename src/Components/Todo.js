import { Backspace, Edit } from "@mui/icons-material";
import React, { useState } from "react";
import TodoForm from "./TodoForm";

const Todo = ({ todos, updateTodo, deleteTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  //update with value
  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    //clear input after update
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }
  return (
    <div className="singleTodo">
      {todos.map((todo) => (
        <div key={todo.id} className="singleTodo">
          <h1>{todo.text}</h1>
          <Edit onClick={() => updateTodo({ id: todo.id, value: todo.text })} />
          <Backspace onClick={() => deleteTodo(todo.id)} />
        </div>
      ))}
    </div>
  );
};

export default Todo;
