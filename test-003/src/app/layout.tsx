'use client';
import './globals.css';
import { Inter } from 'next/font/google';
import ThemeProvider from './components/providers/Theme';
import { UIProvider } from '../../context/ui';
import { EntriesProvider } from '../../context/entries';
import Layout from './components/layouts/Layout';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: JSX.Element }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <EntriesProvider>
          <UIProvider>
            <ThemeProvider>
              <Layout>{children}</Layout>
            </ThemeProvider>
          </UIProvider>
        </EntriesProvider>
      </body>
    </html>
  );
}
