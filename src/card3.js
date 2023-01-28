import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import img12 from './images/img12.jpeg'

export default function MediaCard3() {
  return (
    <Card sx={{ maxWidth: 180 ,height:300}}>
      <CardContent my={0}>
        <Typography gutterBottom variant="h5" component="div" my={0}>
          TOPS
        </Typography>
         </CardContent>
      
      <CardMedia
        sx={{ height: 250 }}
        image={img12}     
         />
    </Card>
  );
}