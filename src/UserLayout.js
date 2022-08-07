import { Link, Outlet } from 'react-router-dom';

export default function UserLayout() {
  return (
    <div>
      <Link to="/users/new">New User</Link>
      <Outlet context={{ helloTest: 'world' }} />
    </div>
  );
}
