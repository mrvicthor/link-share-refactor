import { Outlet } from "react-router";
import Header from "./header";

const Layout = () => {
  return (
    <section className="flex flex-col h-screen pb-6">
      <Header />
      <main className="flex-1 overflow-y-auto p-4 md:p-0">
        <Outlet />
      </main>
    </section>
  );
};

export default Layout;
