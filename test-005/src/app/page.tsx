import Typography from '@mui/material/Typography';
import ProductsPage from './products/page';

export default function HomePage() {
  return (
    <>
      <Typography variant="h1">Tienda</Typography>
      <Typography variant="h2">Todos los productos</Typography>
      <ProductsPage />
    </>
  );
}
