// LayoutWithNavBar.tsx
import NavBar from "../NavBar/NavBar";
import { Outlet } from "react-router-dom";

const LayoutWithNavBar = () => {
  return (
    <>
      <nav>
        <NavBar />
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default LayoutWithNavBar;
