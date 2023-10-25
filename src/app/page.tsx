import { redirect } from 'next/navigation';

import { locales } from '@/locales';

export default function RootPage() {
  redirect(`/${locales[0].code}`);
}
