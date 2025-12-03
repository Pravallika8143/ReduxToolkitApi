import { Link, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <div className="container mt-4">

      <div className="border border-3 border-dark p-3 rounded">

        <h1 className="mb-3 text-center">Redux Toolkit</h1>

        <div className="mb-3">
          <Navbar />
        </div>

        <div>
          <Outlet />
        </div>

      </div>
    </div>
  );
}

export default App;
