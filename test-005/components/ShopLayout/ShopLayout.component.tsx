'use client';
import { Container } from '@mui/material';
import Navbar from '../Navbar/Navbar.component';
import SideMenu from '../SideMenu/SideMenu.component';
import { UIProvider } from '../../context/ui';

type ShopLayoutT = {
  children: JSX.Element;
};

export default function ShopLayout({ children }: ShopLayoutT) {
  return (
    <UIProvider>
      <>
        <Navbar />
        <SideMenu />
        <Container maxWidth="lg" sx={{ mt: 3 }}>
          {children}
        </Container>
      </>
    </UIProvider>
  );
}
