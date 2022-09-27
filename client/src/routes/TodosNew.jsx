import { Form, useLoaderData } from "react-router-dom";

function TodosNew() {
  const todos = useLoaderData();

  return (
    <>
      <Form action="." method="post">
        <fieldset>
          <legend>Todo</legend>
          <label>
            Title: <input name="title" />
            <button>Create</button>
          </label>
        </fieldset>
      </Form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.title}>{todo.title}</li>
        ))}
      </ul>
      <p>Hello just testing.</p>
    </>
  );
}

export default TodosNew;
