import { Outlet } from "react-router";
import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="w-10/12 mx-auto my-20">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
