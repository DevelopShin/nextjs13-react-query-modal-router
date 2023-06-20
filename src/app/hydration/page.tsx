import getQueryClient from '@/utils/getQueryClient';
import Hydrate from '@/utils/hydrate.client';
import { dehydrate } from '@tanstack/query-core';
import { User } from '../types';
import ListUsers from './list-users';
import { getUsers } from '@/fetch-api';

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
