import ShopLayout from '../../../components/ShopLayout/ShopLayout.component';
import { initialData } from '../../../database/products';
import ProductList from './ProductList.component';

export default function ProductsPage() {
  return (
    <ShopLayout>
      <ProductList products={initialData.products} />
    </ShopLayout>
  );
}
