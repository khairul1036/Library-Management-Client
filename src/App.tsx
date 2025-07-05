import { Outlet } from "react-router";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="w-10/12 mx-auto">
        <Outlet></Outlet>
      </div>
    </>
  );
}

export default App;
