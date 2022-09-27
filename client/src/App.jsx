import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import Layout from "./layout/Layout";
import OneTodo from "./routes/OneTodo";
import TodosNew from "./routes/TodosNew";

const TodosLoader = async () => {
  const res = await fetch("/api/todos/");
  const data = await res.json();
  return data;
};

const OneTodoLoader = async ({ params }) => {
  const { id } = params;
  const res = await fetch(`/api/todos/${id}`);
  const data = await res.json();
  return data;
};

console.log(OneTodoLoader({ params: { id: 1000 } }));

const PostAction = async ({ request }) => {
  const form = await request.formData();
  console.log(form.get("title"));

  const req = await fetch("/api/todos", { method: "POST" });
  const data = await req.json();

  return redirect(`/todos/${data.id}`);
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <p>Testing</p> },
      {
        path: "todos",
        loader: TodosLoader,
        action: PostAction,
        element: <TodosNew />,
      },
      {
        path: "todos/:id",
        loader: OneTodoLoader,
        element: <OneTodo />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;










// import {
//   createBrowserRouter,
//   redirect,
//   RouterProvider,
// } from "react-router-dom";
// import Layout from "./layout/Layout";
// import OneTodo from "./routes/OneTodo";
// import TodosNew from "./routes/TodosNew";

// const TodosLoader = async () => {
//   const res = await fetch("/api/todos/");
//   const data = await res.json();
//   return data;
// };

// const OneTodoLoader = async ({ params }) => {
//   const { id } = params;
//   const res = await fetch(`/api/todos/${id}`);
//   const data = await res.json();
//   return data;
// };

// // const TodoLoader = async () => {
// //   const res = await fetch("/api/todos/");
// //   const data = await res.json();
// //   return data;
// // };

// // const Error = () => <h3>Error!!</h3>;

// const PostAction = async ({ request }) => {
//   const data = await request.formData();
//   console.log(data.get("title"));
//   //fetch

//   return redirect("/todos/2");
// };

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     // errorElement: <Error />,
//     children: [
//       { index: true, element: <p>Testing</p> },
//       {
//         path: "todos",
//         loader: TodosLoader,
//         action: PostAction,
//         element: <TodosNew />,
//       },
//       {
//         path: "todos/:id",
//         loader: OneTodoLoader,
//         element: <OneTodo />,
//       },
//     ],
//   },
// ]);

// // const router2 = createBrowserRouter(
// //   createRoutesFromElements(
// //     <Route path="/" loader={TodosLoader} element={<TodosNew />} />
// //   )
// // );

// function App() {
//   return (
//     <RouterProvider router={router} />
//     // <BrowserRouter>
//     //   <Routes>
//     // <Navbar />
//     //     <Route path="/" element={<Todos />} />
//     //   </Routes>
//     // </BrowserRouter>
//   );
// }

// export default App;
