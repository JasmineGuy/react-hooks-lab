import React, { useState } from "react";

const AddTodo = (props) => {
  const [userInput, setUserInput] = useState("");

  function addItem(e) {
    e.preventDefault();
    props.addTodo(userInput);
    setUserInput("");
  }
  return (
    <form onSubmit={addItem}>
      <input
        placeholder="Add a to do item"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button>Submit</button>
    </form>
  );
};

export default AddTodo;
