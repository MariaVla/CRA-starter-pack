import { useQuery } from '@tanstack/react-query';

const fetchUser = async (userId) => {
  const response = await fetch(`http://localhost:4000/superheroes/${userId}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

export const useUserData = (userId, onSuccess, onError) => {
  return useQuery(['user', userId], () => fetchUser(userId), {
    onSuccess,
    onError,
  });
};
