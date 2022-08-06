import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { User } from "./pages/User";
import { NewUser } from "./pages/NewUser";

import Users from "./pages/Users";
import NotFound from "./pages/NotFound";
import UserLayout from "./UserLayout";

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

        <Route path="/users" element={<UserLayout />}>
          <Route index element={<Users />} />
          <Route path=":id" element={<User />} />
          <Route path="new" element={<NewUser />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
