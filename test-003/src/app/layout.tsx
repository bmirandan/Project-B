'use client';
import './globals.css';
import { Inter } from 'next/font/google';
import ThemeProvider from './components/providers/Theme';
import Layout from './components/layouts/Layout';

const inter = Inter({ subsets: ['latin'] });

import { UIProvider } from '../../context/ui';

export default function RootLayout({ children }: { children: JSX.Element }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UIProvider>
          <ThemeProvider>
            <Layout>{children}</Layout>
          </ThemeProvider>
        </UIProvider>
      </body>
    </html>
  );
}
