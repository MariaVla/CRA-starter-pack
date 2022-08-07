import { useOutletContext, useParams } from "react-router-dom";

export function User() {
  const { id } = useParams();
  const { helloTest } = useOutletContext();

  return (
    <>
      <h1>User: {id}</h1>
      <p>{helloTest}</p>
    </>
  );
}
