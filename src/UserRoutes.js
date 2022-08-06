import { Routes, Route } from "react-router-dom";

import { User } from "./pages/User";
import { NewUser } from "./pages/NewUser";

import Users from "./pages/Users";
import UserLayout from "./UserLayout";

export default function UserRoutes() {
  return (
    <Routes>
      <Route element={<UserLayout />}>
        <Route index element={<Users />} />
        <Route path=":id" element={<User />} />
        <Route path="new" element={<NewUser />} />
      </Route>
    </Routes>
  );
}
