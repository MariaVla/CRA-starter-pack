import { useQuery } from '@tanstack/react-query';

// Example with promises
// const fetchFriends = () => {
//   return fetch('http://localhost:4000/friends1').then((response) =>
//     response.json()
//   );
// };

// Example with async/await
const fetchFriends = async () => {
  const response = await fetch('http://localhost:4000/friends');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

// Example using React-Query
export default function Friends() {
  // Queries (["key"], func that returns a promise)
  const {
    isLoading,
    data: friends,
    isError,
    error,
    refetch,
    isFetching,
  } = useQuery(['friends'], fetchFriends, { staleTime: 30000 });

  if (isLoading || isFetching) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h1>Friends:</h1>
      <button onClick={refetch}>Fetch friends</button>
      <ul>
        {friends?.map((friend) => (
          <li key={friend.id}>
            <a href={friend.website} target="_blank" rel="noreferrer">
              {friend.name}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
