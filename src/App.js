import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import UserRoutes from "./UserRoutes";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />} />

        <Route path="/users/*" element={<UserRoutes />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
