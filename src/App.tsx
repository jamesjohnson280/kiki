import { BrowserRouter, Link } from "react-router-dom";
import { Routes } from "./Routes";

function App() {
  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/login"> Login </Link>
        </li>
      </ul>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
