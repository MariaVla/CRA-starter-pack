import { useFriendsData } from '../hooks/useFriendsData';

// Example using React-Query
export default function Friends() {
  const onSuccess = (data) => {
    // Perform side effect after data fetching
    console.log('onSuccess:', { data });
  };

  const onError = (error) => {
    // Perform side effect after encountering error
    console.log('onError:', { error });
  };

  // Queries (["key"], func that returns a promise)
  const {
    isLoading,
    data: friends,
    isError,
    error,
    refetch,
    isFetching,
  } = useFriendsData(onSuccess, onError);

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
