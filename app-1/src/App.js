import { useState } from "react";
import List from "./List";
import AddTodo from "./AddTodo";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(item) {
    let newTodos = [...todos, item];
    setTodos(newTodos);
  }
  return (
    <div className="App">
      <AddTodo addTodo={addTodo} />
      <List list={todos} />
    </div>
  );
}

export default App;
