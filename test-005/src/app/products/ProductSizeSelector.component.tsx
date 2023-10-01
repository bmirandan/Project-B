'use client';

import { Box, Button } from '@mui/material';
import { ValidSizesT } from '../../../interfaces/products';

type ProductSizeSelectorT = {
  selectedSize: ValidSizesT;
  sizes: ValidSizesT[];
};

export default function ProductSizeSelector({ selectedSize, sizes }: ProductSizeSelectorT) {
  return (
    <Box>
      {sizes.map((size) => (
        <Button
          key={size}
          size="small"
          sx={{
            bgcolor: selectedSize === size ? 'primary.dark' : 'primary',
            color: selectedSize === size ? 'white' : 'black',
          }}
        >
          {size}
        </Button>
      ))}
    </Box>
  );
}
