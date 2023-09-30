'use client'; // for nextjs 13.4 user
import Link from 'next/link';
import React from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import './Slider.module.css';
import { Box, Card, CardContent, CardMedia, Grid, IconButton } from '@mui/material';
import { ProductT } from '../../interfaces/products';

type SiderT = {
  filteredItems: ProductT['images'];
};
export default function Slider({ filteredItems }: SiderT) {
  console.log(filteredItems);
  const slideLeft = () => {
    let slider = document.getElementById('slider') as HTMLDivElement;
    slider.scrollLeft = slider.scrollLeft - 330;
  };

  const slideRight = () => {
    let slider = document.getElementById('slider') as HTMLDivElement;
    slider.scrollLeft = slider.scrollLeft + 330;
  };
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <IconButton>
        <ArrowBackIosNewIcon onClick={slideLeft} />
      </IconButton>
      <Box
        className="container"
        id="slider"
        sx={{
          display: 'flex',
          whiteSpace: 'nowrap',
          width: '330px',
          height: '400px',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        {filteredItems.map((item, index) => (
          <Grid
            item
            key={`index${item}`}
            xs={12}
            sm={12}
            md={12}
            sx={{
              displayDirection: 'row',
            }}
          >
            <Card sx={{ boxShadow: 'none' }}>
              <CardContent>
                <CardMedia
                  component="img"
                  image={`/products/${item}`}
                  alt={item}
                  sx={{
                    width: '300px', // 16:9
                    height: '300px',
                  }}
                />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Box>

      <IconButton sx={{ height: '40px' }}>
        <ArrowForwardIosIcon onClick={slideRight} />
      </IconButton>
    </Box>
  );
}
