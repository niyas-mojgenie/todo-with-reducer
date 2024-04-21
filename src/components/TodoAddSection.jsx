import { useContext } from "react";
import TodoContext from "../context/todos-context/TodoContext";
import { addTodo } from "../context/todos-context/actions";

function TodoAddSection() {
  const { todoInput, setTodoInput } = useContext(TodoContext);
  const { dispatch, todos } = useContext(TodoContext);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(addTodo({ id: todos.length - 1, text: todoInput }));
        setTodoInput("");
      }}
    >
      <input
        value={todoInput}
        onChange={(e) => {
          setTodoInput(e.target.value);
        }}
        type="text"
      />
      <button type="submit">add</button>
    </form>
  );
}

export default TodoAddSection;
