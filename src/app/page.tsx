'use client';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1>Hello, Next.js 13 App Directory!</h1>
      <p>
        <Link href='/initial-data'>Prefetching Using initial data</Link>
      </p>
      <p>
        <Link href='/hydration'>Prefetching Using Hydration</Link>
      </p>
      {/* <Modal>
        <div>
          <h2 className='text-lg font-bold mb-2 text-red-700'>Modal Title</h2>
          <p>This is the content of the modal.</p>
          <h2 className='text-lg font-bold mb-2 text-red-700'>Modal Title</h2>
          <p>This is the content of the modal.</p>
          <h2 className='text-lg font-bold mb-2 text-red-700'>Modal Title</h2>
          <p>This is the content of the modal.</p>
          <h2 className='text-lg font-bold mb-2 text-red-700'>Modal Title</h2>
          <p>This is the content of the modal.</p>
        </div>
      </Modal> */}
    </>
  );
}
