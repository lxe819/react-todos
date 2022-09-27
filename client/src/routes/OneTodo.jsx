import { useLoaderData } from "react-router-dom";

function OneTodo() {
  const todo = useLoaderData();
  return (
    <>
      <h2>One Todo</h2>
      <h3>{todo.title}</h3>
    </>
  );
}

export default OneTodo;
