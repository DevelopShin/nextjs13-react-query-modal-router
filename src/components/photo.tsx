'use client';

import { User } from '@/app/types';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';

type Props = {
  id: string;
};
async function getUser(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user = (await res.json()) as User;
  return user;
}

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
        <Image
          src={`https://robohash.org/${user.id}?set=set2&size=680x680`}
          alt={user.name}
          // style={{ height: 180, width: 180 }}
          width={180}
          height={180}
          placeholder='blur' // 추가
          blurDataURL='data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAHCAYAAADAp4fuAAAAE0lEQVR42mN0XfehngENMA6oIABPRxC2b0sFwAAAAABJRU5ErkJggg=='
        />
      )}
      <h1>{user?.name}</h1>
      <h1>{user?.email}</h1>
    </div>
  );
};
