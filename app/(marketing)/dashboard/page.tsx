// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
import { Suspense } from 'react';
import Loading from '@/app/(marketing)/dashboard/loading';
import 'server-only';

// async function getData() {
//   const res: Response = await fetch('https://seanallen-course-backend.herokuapp.com/swiftui-fundamentals/appetizers');
//   if (!res.ok) {
//     throw new Error('Failed to fetch data');
//   }
//   await new Promise(resolve => {
//     setTimeout(resolve, 3000);
//   });
//   return res.json();
// }

async function getAlbums() {
  // Add a fake delay to make waiting noticeable.
  await new Promise(resolve => {
    setTimeout(resolve, 3000);
  });

  return [{
    id: 13,
    title: 'Let It Be',
    year: 1970
  }, {
    id: 12,
    title: 'Abbey Road',
    year: 1969
  }, {
    id: 11,
    title: 'Yellow Submarine',
    year: 1969
  }, {
    id: 10,
    title: 'The Beatles',
    year: 1968
  }, {
    id: 9,
    title: 'Magical Mystery Tour',
    year: 1967
  }, {
    id: 8,
    title: 'Sgt. Pepper\'s Lonely Hearts Club Band',
    year: 1967
  }, {
    id: 7,
    title: 'Revolver',
    year: 1966
  }, {
    id: 6,
    title: 'Rubber Soul',
    year: 1965
  }, {
    id: 5,
    title: 'Help!',
    year: 1965
  }, {
    id: 4,
    title: 'Beatles For Sale',
    year: 1964
  }, {
    id: 3,
    title: 'A Hard Day\'s Night',
    year: 1964
  }, {
    id: 2,
    title: 'With The Beatles',
    year: 1963
  }, {
    id: 1,
    title: 'Please Please Me',
    year: 1963
  }];
}

async function Dishes() {
  // Wait for the playlists
  const albums: any = await getAlbums()

  return (
    <ul>
      {albums.map((album: any) => (
        <li key={album.id}>{album.title}</li>
      ))}
    </ul>
  )
}

export default function Page() {
  return (
    <>
      <h1>Hello, Dashboard Page!</h1>
      <Suspense fallback={<BigSpinner/>}>
        <Dishes />
      </Suspense>
    </>
  )
}

function BigSpinner() {
  return <h2>🌀 Loading...</h2>;
}