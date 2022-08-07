import { useEffect, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("useEffect");

    fetch("http://localhost:4000/superheroes")
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);
        setUsers(data);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <h1>User list</h1>
      <ul>
        {users &&
          users.map((user) => (
            <li key={user.id}>
              <a href={user.website} target="_blank" rel="noreferrer">
                {user.name}
              </a>
            </li>
          ))}
      </ul>
    </>
  );
}
