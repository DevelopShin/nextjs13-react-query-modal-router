import { getUsers } from '@/fetch-api';
import { User } from '../types';
import ListUsers from './list-users';

export default async function InitialData() {
  const users = await getUsers();

  return <ListUsers users={users} />;
}
