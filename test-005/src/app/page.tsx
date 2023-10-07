import Typography from '@mui/material/Typography';
import ShopLayout from '../../components/ShopLayout/ShopLayout.component';
import { initialData } from '../../database/products';
import ProductList from './products/ProductList.component';

export default function HomePage() {
  return (
    <ShopLayout>
      <>
        <Typography variant="h1">Tienda</Typography>
        <Typography variant="h2">Todos los productos</Typography>
        <ProductList products={initialData.products} />
      </>
    </ShopLayout>
  );
}
