import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <main>
      <header>
        <h1>Todos</h1>
      </header>
      <Outlet />
    </main>
  );
}

export default Layout;
