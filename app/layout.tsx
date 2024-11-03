
import '#/styles/globals.css';
import { Metadata } from 'next';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="">
      {/* <Head>
        <link rel="icon" href={Favicon.src} sizes="32x16" />
      </Head> */}
      <body className="overflow-x-hidden bg-gray-100">
        {/* here goes the nav */}

        {children}

        {/* here goes the footer */}
      </body>
    </html>
  );
}
