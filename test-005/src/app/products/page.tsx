import { initialData } from '../../../database/products';
import ProductList from './ProductList.component';

export default function ProductsPage() {
  return <ProductList products={initialData.products} />;
}
