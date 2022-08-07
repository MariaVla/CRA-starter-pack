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

export const useFriendsData = (onSuccess, onError) => {
  return useQuery(['friends'], fetchFriends, {
    staleTime: 30000,
    onSuccess,
    onError,
  });
};
