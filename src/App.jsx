import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="px-10 mx-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
