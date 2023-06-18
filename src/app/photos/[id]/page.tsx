import { Photo } from '@/components/photo';
import React from 'react';

type Props = {
  params: { id: string };
};

function page({ params: { id } }: Props) {
  return (
    <div>
      <Photo id={id} />
    </div>
  );
}

export default page;
