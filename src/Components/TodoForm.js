import { Button, TextField } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import "./CSS/TodoForm.css";
const TodoForm = (props) => {
  const [input, setInput] = useState(""); //initailly empty;

  const inputRef = useRef(null);

  //for cursor focus on input

  useEffect(() => {
    inputRef.current.focus();
  });

  // //update with value
  // const submitUpdate = (value) => {
  //   updateTodo(edit.id, value);
  //   //clear input after update
  //   setEdit({
  //     id: null,
  //     value: "",
  //   });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    //onsubmit () from
    props.onSubmit({
      id: Date.now(),
      text: input,
    });

    setInput(""); // clear input after added
  };

  return (
    <div className="todo_form_container">
      <form className="todo_form" onSubmit={handleSubmit}>
        <div className="addtodo">
          <TextField
            id="outlined-basic"
            label="Add a todo..."
            variant="outlined"
            value={input}
            type="text"
            name="text"
            ref={inputRef}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button
            variant="outlined"
            type="submit"
            color="success"
            className="addButton"
          >
            Add
          </Button>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
