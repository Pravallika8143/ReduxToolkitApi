import { Link, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Counter from "./features/counter/Counter";
import Products from "./features/products/Products.jsx";
import Recipes from "./features/recipes/Recipes.jsx";
import TodoList from "./features/todolist/Todolist";
import Leads from "./features/leads/Leads.jsx";
import AddLeads from "./features/leads/AddLeads.jsx";


function App() {

  return (
    <div className="border border-3 m-3 p-1 border-dark">
      <h1>Redux ToolKit</h1>
      <ul>
      <li>
        <Link to="/counter">Counter</Link>
      </li>
      <li>
        <Link to="/todolist">Todolist</Link>
      </li>
      <li>
        <Link to="/recipes">Recipes</Link>
      </li>
      <li>
        <Link to="/products">Products</Link>
      </li>
    </ul> 
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
    </div>
  )
}

export default App;
