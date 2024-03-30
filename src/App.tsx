import { BrowserRouter } from "react-router-dom";
import { Routes } from "./Routes";

function App() {
  return (
    <BrowserRouter>
      <ul>
        <li>
          <a href="/">home</a>
        </li>
        <li>
          <a href="/login">login</a>
        </li>
      </ul>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
