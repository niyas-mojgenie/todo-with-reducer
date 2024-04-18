function TodoAddSection({ setTodoInput, setTodo, todoInput, todo }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setTodo([...todo, todoInput]);
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
