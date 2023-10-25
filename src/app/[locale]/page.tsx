import { IParams } from '@/types';

import Filter from './components/Filter';

export default function Home({ params: { locale } }: { params: IParams }) {
  return (
    <main className="container mx-auto min-h-[470px] grow py-16">
      <Filter locale={locale} />
    </main>
  );
}
