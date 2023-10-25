'use client';

import Error from 'next/error';

import { locales } from '@/locales';

export default function NotFound() {
  return (
    <html lang={locales[0].code}>
      <body>
        <Error statusCode={404} />
      </body>
    </html>
  );
}
