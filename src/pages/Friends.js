import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

const fetchFriends = () => {
  return fetch("http://localhost:4000/friends").then((response) =>
    response.json()
  );
};

// Example using React-Query
export default function Friends() {
  // Queries (["a_key"], func that returns a promise)
  const { isLoading, data: friends } = useQuery(["friends"], fetchFriends);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <h1>Friends:</h1>
      <ul>
        {friends &&
          friends.map((friend) => (
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
