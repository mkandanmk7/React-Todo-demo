import { Backspace, Edit } from "@mui/icons-material";
import React, { useState } from "react";
import TodoForm from "./TodoForm";
import "./CSS/Todo.css";

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
        <div key={todo.id} className="singleTodo_container">
          <h1>{todo.text}</h1>
          <div>
            <Edit onClick={() => setEdit({ id: todo.id, value: todo.text })} />
            <Backspace onClick={() => deleteTodo(todo.id)} />{" "}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Todo;
