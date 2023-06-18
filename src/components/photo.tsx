'use client';
import { getUser } from '@/app/hydration/page';
import { useQuery } from '@tanstack/react-query';

type Props = {
  id: string;
};

export const Photo = ({ id }: Props) => {
  const {
    data: user,
    isLoading,
    isFetching,
    error,
  } = useQuery({
    queryKey: ['hydrate-users', id],
    queryFn: () => getUser(id),
  });
  return (
    <div>
      {user && (
        <img
          src={`https://robohash.org/${user.id}?set=set2&size=680x680`}
          alt={user.name}
          style={{ height: 180, width: 180 }}
        />
      )}
      <h1>{user?.name}</h1>
      <h1>{user?.email}</h1>
    </div>
  );
};
