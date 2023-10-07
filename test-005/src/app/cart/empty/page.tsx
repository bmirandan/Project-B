import { RemoveShoppingCartOutlined } from '@mui/icons-material';
import { Box, Typography, Link } from '@mui/material';
import NextLink from 'next/link';
import ShopLayout from '../../../../components/ShopLayout/ShopLayout.component';

export const metadata = {
  title: 'Empty Cart',
  description: 'There is no items in the cart',
};
export default function EmptyPage() {
  return (
    <ShopLayout>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="calc(100vh - 200px)"
        sx={{ flexDirection: { xs: 'column', sm: 'row' } }}
      >
        <RemoveShoppingCartOutlined sx={{ fontSize: 96 }} />
        <Box>
          <Typography> Your cart is empty </Typography>

          <NextLink href="/" legacyBehavior passHref>
            <Link typography="h4" color="secondary" underline="hover">
              Regresar
            </Link>
          </NextLink>
        </Box>
      </Box>
    </ShopLayout>
  );
}
