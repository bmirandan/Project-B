'use client'; // for nextjs 13.4 user
import Link from 'next/link';
import React from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import './Slider.module.css';
import { Box, Card, CardContent, CardMedia, Grid, IconButton } from '@mui/material';

export default function Slider() {
  const filteredItems = [
    {
      id: 1,
      img: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'camera',
      price: 200,
    },
    {
      id: 2,
      img: 'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Phone',
      price: 100,
    },
    {
      id: 3,
      img: 'https://images.pexels.com/photos/12753820/pexels-photo-12753820.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Laptop',
      price: 500,
    },
    {
      id: 4,
      img: 'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Headephone',
      price: 40,
    },
    {
      id: 5,
      img: 'https://images.pexels.com/photos/163117/keyboard-white-computer-keyboard-desktop-163117.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Keyboard',
      price: 140,
    },
    {
      id: 6,
      img: 'https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Gaming Mouse',
      price: 140,
    },
  ];

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
        {filteredItems.map((item) => (
          <Grid
            item
            key={item.id}
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
                  image={item.img}
                  alt={item.description}
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
