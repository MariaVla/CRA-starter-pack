import { useEffect, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("useEffect");
    async function fetchData() {
      await fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => {
          console.log("data", data);
          setUsers(data);
          setIsLoading(false);
        });
    }
    fetchData();
  }, []);

  if (isLoading) {
    return <h1>Is loading...</h1>;
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
