import Link from 'next/link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const metadata = {
  title: 'Not Found',
  description: 'Shop the best products of the globe',
};

export default function NotFound() {
  return (
    <Box
      display="flex"
      sx={{ flexDirection: { xs: 'column', md: 'row' } }}
      justifyContent="center"
      alignItems="center"
      height="calc(100vh - 200px)"
    >
      <Typography variant="h1" fontSize={80} fontWeight={200}>
        404 |
      </Typography>
      <Typography variant="h3" marginLeft={2} fontSize={40} fontWeight={80}>
        Page Not Found
      </Typography>
    </Box>
  );
}
