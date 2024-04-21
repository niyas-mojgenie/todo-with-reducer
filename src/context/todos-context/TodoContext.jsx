import { createContext, useContext, useReducer, useState } from "react";
import { todoReducer } from "./todoReducer";
import { initialstate } from "./initialstate";

const TodoContext = createContext({});

export const TodoDataProvider = ({ children }) => {
  // const [todos, setTodos] = useState([]);
  const [todos, dispatch] = useReducer(todoReducer, initialstate);
  const [todoInput, setTodoInput] = useState("");
  return (
    <TodoContext.Provider value={{ todos, dispatch, todoInput, setTodoInput }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
