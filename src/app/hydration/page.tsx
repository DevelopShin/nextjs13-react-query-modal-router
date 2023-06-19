import getQueryClient from '@/utils/getQueryClient';
import Hydrate from '@/utils/hydrate.client';
import { dehydrate } from '@tanstack/query-core';
import { User } from '../types';
import ListUsers from './list-users';

async function getUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    // cache: 'force-cache', //SSG => getStaticSideProps
    cache: 'no-store', //SSR => getServerSideProps
    // next: {
    // 	revalidate: 20, // ISR
    // }
  });
  const users = (await res.json()) as User[];
  return users;
}

export default async function Hydation() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(['hydrate-users'], getUsers);
  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <ListUsers />
    </Hydrate>
  );
}
