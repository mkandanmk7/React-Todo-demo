import { Button, TextField } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

const TodoForm = (props) => {
  const [input, setInput] = useState("Hello"); //initailly empty;

  const inputRef = useRef(null);

  //for cursor focus on input

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 100),
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
