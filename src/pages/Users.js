import { Link } from 'react-router-dom';
import { useUsersData } from '../hooks/useUsersData';
import '../styles/users.scss';

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

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <div className="container">
      <div className="container-users">
        <ul className="list-users">
          {users?.map((user) => (
            <div key={user.id}>
              <Link to={`/users/${user.id}`}>
                {user.id}-{user.name}
              </Link>
            </div>
          ))}
        </ul>
        <button className="btn btn-xs fetch-btn" onClick={refetch}>
          Trigger Refetch - React Query
        </button>
      </div>
    </div>
  );
}
