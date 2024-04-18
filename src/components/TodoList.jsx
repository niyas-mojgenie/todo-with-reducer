/* eslint-disable react/prop-types */
import TodoItem from "./TodoItem";

function TodoList({ todo }) {
  return (
    <>
      <ul>
        {todo.map((e, i) => {
          return <TodoItem key={i} todoItem={e} />;
        })}
      </ul>
    </>
  );
}

export default TodoList;
