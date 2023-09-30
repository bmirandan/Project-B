'use client';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import NextLink from 'next/link';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { IconButton } from '@mui/material';
import SearchOutlined from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';

export default function Navbar() {
  return (
    <AppBar position="sticky" elevation={0}>
      <Toolbar>
        <NextLink href="/" legacyBehavior>
          <Link display="flex" alignItems="center">
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Teslo |
            </Typography>
            <Typography sx={{ ml: 0.5 }}>Shop</Typography>
          </Link>
        </NextLink>
        <Box flex={1} />
        <Box
          sx={{
            display: {
              xs: 'none',
              sm: 'block',
            },
          }}
        >
          <NextLink href="/category/men" legacyBehavior>
            <Link>
              <Button> Men </Button>
            </Link>
          </NextLink>
          <NextLink href="/category/woman" legacyBehavior>
            <Link>
              <Button> Woman </Button>
            </Link>
          </NextLink>
          <NextLink href="/category/kids" legacyBehavior>
            <Link>
              <Button> Kids </Button>
            </Link>
          </NextLink>
        </Box>
        <Box flex={1} />

        <IconButton size="large" edge="start">
          <SearchOutlined />
        </IconButton>

        <IconButton size="large" edge="start">
          <Badge badgeContent={2} color="secondary">
            <ShoppingCartOutlinedIcon />
          </Badge>
        </IconButton>

        <Button>Menu</Button>
      </Toolbar>
    </AppBar>
  );
}
