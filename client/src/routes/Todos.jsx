import { useEffect, useState } from "react";

function Todos() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const fetchTodos = async () => {
      const res = await fetch("/api/todos/");
      const data = await res.json();
      setTodos(data);
    };
    fetchTodos();
  }, []);

  return (
    <>
      <h2>Testing</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.title}>{todo.title}</li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
