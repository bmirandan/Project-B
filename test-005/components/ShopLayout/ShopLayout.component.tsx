import { Container } from '@mui/material';
import Navbar from '../Navbar/Navbar.component';

type ShopLayoutT = {
  children: JSX.Element;
};

export default function ShopLayout({ children }: ShopLayoutT) {
  return (
    <>
      <Navbar />
      <Container maxWidth="lg" sx={{ mt: 3 }}>
        {children}
      </Container>
    </>
  );
}
