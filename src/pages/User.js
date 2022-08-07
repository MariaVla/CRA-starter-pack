import { useParams } from 'react-router-dom';
import { useUserData } from '../hooks/useUserData';

export function User() {
  const { id } = useParams();
  // const { helloTest } = useOutletContext();

  const { isLoading, data: user, isError, error, isFetching } = useUserData(id);

  if (isLoading || isFetching) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h1>
        User: {user?.name} - {user?.alterEgo}
      </h1>
      {/* <p>{helloTest}</p> */}
    </>
  );
}
