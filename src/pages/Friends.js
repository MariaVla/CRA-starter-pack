import { useEffect, useState } from 'react';

// Example normal data fetching in React
export default function Friends() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('http://localhost:4000/friends')
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Something went wrong');
      })
      .then((data) => {
        setUsers(data);
        setIsLoading(false);
      })
      .catch((error) => setError(error.message));
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div className="container">
      <div className="container-users">
        <h1>Friends list (normal fetching in React)</h1>
        <ul className="list-users">
          {users?.map((user) => (
            <li key={user.id}>
              <a href={user.website} target="_blank" rel="noreferrer">
                {user.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
