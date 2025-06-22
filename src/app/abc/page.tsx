import Link from 'next/link';

export default function Page() {
  return (
    <>
      <h1>hello page</h1>
      <Link href={'/'}></Link>
    </>
  );
}
