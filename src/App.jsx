import { useState } from "react";
import TodoAddSection from "./components/TodoAddSection";
import TodoList from "./components/TodoList";

function App() {
  const [todoInput, setTodoInput] = useState("");
  const [todo, setTodo] = useState([]);
  console.log("todoInput :", todoInput);
  console.log("todo :", todo);

  return (
    <>
      <TodoList todo={todo} />
      <TodoAddSection
        setTodoInput={setTodoInput}
        setTodo={setTodo}
        todoInput={todoInput}
        todo={todo}
      />
    </>
  );
}

export default App;
