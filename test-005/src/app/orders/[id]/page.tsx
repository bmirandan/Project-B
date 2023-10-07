'use client';
import { Box, Button, Card, CardContent, Chip, Divider, Grid, Link, Typography } from '@mui/material';
import CartList from '../../cart/CartList.component';
import OrderSummary from '../../cart/OrderSummary.component';
import NextLink from 'next/link';
import { CreditCardOffOutlined, CreditScoreOutlined } from '@mui/icons-material';
import ShopLayout from '../../../../components/ShopLayout/ShopLayout.component';

export default function SummaryPage(props: any) {
  return (
    <ShopLayout>
      <>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="h1" component="h1" sx={{ mb: 5 }}>
            Order: {props.params.id}
          </Typography>
          <Chip label="Payment pending" variant="outlined" color="error" icon={<CreditCardOffOutlined />} />
        </Box>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={7}>
            <CartList />
          </Grid>
          <Grid item xs={12} sm={5}>
            <Card className="summary-card" variant="outlined">
              <CardContent>
                <Typography variant="h2">Summary (3 products)</Typography>
                <Divider sx={{ my: 1 }} />
                <Box display="flex" justifyContent="space-between" alignContent="center">
                  <Typography variant="subtitle1">Delivery address</Typography>

                  <NextLink href="/checkout/address" legacyBehavior passHref>
                    <Link variant="overline" underline="always">
                      Editar
                    </Link>
                  </NextLink>
                </Box>

                <Typography variant="body1">Benjamin Miranda</Typography>
                <Typography variant="body1">323 Algub lugar</Typography>
                <Typography variant="body1">Stittsville, HYA 234</Typography>
                <Typography variant="body1">Canada</Typography>
                <Typography variant="body1">+21312312</Typography>

                <Divider sx={{ my: 1 }} />
                <Box display="flex" justifyContent="end">
                  <NextLink href="/cart" legacyBehavior passHref>
                    <Link variant="overline" underline="always">
                      Editar
                    </Link>
                  </NextLink>
                </Box>
                <OrderSummary />
                <Box sx={{ mt: 3 }}>
                  <Typography variant="h1" component="h1">
                    Pay
                  </Typography>
                  <Chip
                    sx={{ my: 2 }}
                    label="Payment succeed"
                    variant="outlined"
                    color="success"
                    icon={<CreditScoreOutlined />}
                  />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </>
    </ShopLayout>
  );
}
