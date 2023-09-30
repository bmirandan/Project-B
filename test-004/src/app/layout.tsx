'use client';

import { UIProvider } from '../../context/ui';
import ThemeProvider from '../../providers/Theme';
import { Navbar } from '../components/Navbar';
import { Container } from '@mui/material';

export default function RootLayout({ children }: { children: JSX.Element }) {
  return (
    <html lang="en">
      <body>
        <UIProvider>
          <ThemeProvider>
            <Navbar />
            <Container maxWidth="xl" sx={{ paddingTop: 4 }}>
              {children}
            </Container>
          </ThemeProvider>
        </UIProvider>
      </body>
    </html>
  );
}
