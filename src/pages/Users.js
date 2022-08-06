import React from "react";
import { Link } from "react-router-dom";

export default function Users() {
  return (
    <>
      <h1>User list</h1>
      <Link to="/users/1">User 1</Link>
      <br />
      <Link to="/users/2">User 2</Link>
      <br />
      <Link to="/users/new">New User</Link>
    </>
  );
}
