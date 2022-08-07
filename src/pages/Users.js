import { useUsersData } from '../hooks/useUsersData';

// Example using React-Query
export default function Users() {
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
    data: users,
    isError,
    error,
    refetch,
    isFetching,
  } = useUsersData(onSuccess, onError);

  if (isLoading || isFetching) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h1>Users:</h1>
      <button onClick={refetch}>Fetch users</button>

      <ul>
        {users?.map((user) => (
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
