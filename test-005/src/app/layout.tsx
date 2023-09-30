import ThemeRegistry from '../../themes/ThemeRegistry';
import ShopLayout from '../../components/ShopLayout/ShopLayout.component';
import { UIProvider } from '../../context/ui';

export const metadata = {
  title: 'Teslo - shop',
  description: 'Shop the best products of the globe',
};

export default function RootLayout({ children }: { children: JSX.Element }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <ShopLayout>{children}</ShopLayout>
        </ThemeRegistry>
      </body>
    </html>
  );
}
