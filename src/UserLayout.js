import { Link, Outlet } from "react-router-dom";

export default function UserLayout() {
  return (
    <div>
      <Link to="/users/1">User 1</Link>
      <br />
      <Link to="/users/2">User 2</Link>
      <br />
      <Link to="/users/new">New User</Link>
      <Outlet context={{ helloTest: "world" }} />
    </div>
  );
}
