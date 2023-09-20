import { Box } from '@mui/material';
import { Navbar, Sidebar } from '../ui';

type LayoutT = {
  children: JSX.Element;
};

export default function Layout({ children }: LayoutT) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Navbar />
      <Sidebar />
      <Box sx={{ padding: '10px 20px' }}>{children}</Box>
    </Box>
  );
}
