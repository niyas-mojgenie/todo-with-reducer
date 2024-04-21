/* eslint-disable react/prop-types */
import { useContext } from "react";
import TodoItem from "./TodoItem";
import TodoContext from "../context/todos-context/TodoContext";

function TodoList() {
  const { todos } = useContext(TodoContext);
  return (
    <>
      <ul>
        {todos.map((e, i) => {
          return <TodoItem key={i} todoItem={e.text} />;
        })}
      </ul>
    </>
  );
}

export default TodoList;
