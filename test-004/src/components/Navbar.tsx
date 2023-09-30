import { IconButton, Toolbar, AppBar, Link, Typography } from '@mui/material';
import { MenuOutlined } from '@mui/icons-material';
import NextLink from 'next/link';

export const Navbar = () => {
  return (
    <AppBar position="sticky" elevation={0}>
      <Toolbar>
        <IconButton size="large" edge="start">
          <MenuOutlined />
        </IconButton>
        <NextLink href="/" passHref>
          <Link underline="hover">
            <Typography
              variant="h6"
              sx={{
                color: 'white',
              }}
            >
              CookieMaster
            </Typography>
          </Link>
        </NextLink>
        <div style={{ flex: 1 }} />
        <NextLink href="/theme-changer" passHref>
          <Link underline="hover">
            <Typography
              variant="h6"
              sx={{
                color: 'white',
              }}
            >
              Cambiar tema
            </Typography>
          </Link>
        </NextLink>
      </Toolbar>
    </AppBar>
  );
};
