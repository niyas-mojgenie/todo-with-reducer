import { useContext, useState } from "react";
import TodoAddSection from "./components/TodoAddSection";
import TodoList from "./components/TodoList";
import TodoContext, {
  TodoDataProvider,
} from "./context/todos-context/TodoContext";

function App() {
  const { todos, todoInput } = useContext(TodoContext);
  console.log("todoInput :", todoInput);
  console.log("todo :", todos);

  return (
    <TodoDataProvider>
      <TodoList />
      <TodoAddSection />
    </TodoDataProvider>
  );
}

export default App;
