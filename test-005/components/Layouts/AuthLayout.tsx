import { Box } from '@mui/material';
import Head from 'next/head';

type AuthLayoutT = {
  title: string;
  children: JSX.Element;
};
export default function AuthLayout({ children, title }: AuthLayoutT) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main>
        <Box display="flex" justifyContent="center" alignItems="center" height="calc(100vh - 200px)">
          {children}
        </Box>
      </main>
    </>
  );
}
