import { getCrawlData } from '@/fetch-api';
async function About() {
  const data = await getCrawlData();

  // console.log(data);
  return (
    <div className='flex flex-col items-center gap-10 m-4'>
      <h1 className='font-20 text-2xl'>크롤링 데이타</h1>
      <ul>
        {data.map((d: any, i: number) => (
          <li className='border rounded p-1 mt-2' key={i}>
            {d}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default About;
