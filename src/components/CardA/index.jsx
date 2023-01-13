import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';

const ourteam = [
    {
        name: 'InfiniteN00b',
        image: 'https://source.unsplash.com/random',
        description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    },
    {
        name: 'InfiniteN00b',
        image: 'https://source.unsplash.com/random',
        description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    },
    {
        name: 'InfiniteN00b',
        image: 'https://source.unsplash.com/random',
        description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    },
    {
        name: 'InfiniteN00b',
        image: 'https://source.unsplash.com/random',
        description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    }
];

export default function CardA() {
  return (
    <Grid container spacing={4} justifyContent="space-evenly" padding={3}>
      {ourteam.map(i => 
        <Card sx={{ maxWidth: 345, m: 2 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={i.image}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {i.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {i.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      )}
    </Grid>
  );
}