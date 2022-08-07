import { useQuery, useQueryClient } from '@tanstack/react-query';

const fetchUser = async (userId) => {
  const response = await fetch(`http://localhost:4000/superheroes/${userId}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

// https://tanstack.com/query/v4/docs/guides/initial-query-data
export const useUserData = (userId) => {
  const queryClient = useQueryClient();
  return useQuery(['user', userId], () => fetchUser(userId), {
    initialData: () => {
      return queryClient
        .getQueryData(['users'])
        ?.find((user) => user.id === parseInt(userId));
    },
  });
};
