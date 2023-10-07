import { Box, Button, Grid, TextField, Typography, Link } from '@mui/material';
import AuthLayout from '../../../../components/Layouts/AuthLayout';
import NextLink from 'next/link';

export default function LoginPage() {
  return (
    <AuthLayout title="Login">
      <Box sx={{ width: 350, padding: '10px 20px' }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h1" component="h1">
              Login
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField label="Email" component="h1" variant="filled" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Password" type="password" component="h1" variant="filled" fullWidth />
          </Grid>

          <Grid item xs={12}>
            <Button color="secondary" size="large" className="circular-btn" fullWidth>
              Login
            </Button>
          </Grid>

          <Grid item xs={12} display="flex" justifyContent="end">
            <NextLink legacyBehavior href={'/auth/register'} passHref>
              <Link variant="overline" underline="always">
                Sign up
              </Link>
            </NextLink>
          </Grid>
        </Grid>
      </Box>
    </AuthLayout>
  );
}
