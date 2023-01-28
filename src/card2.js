import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import img4 from './images/img4.jpeg'

export default function MediaCard(props) {
  return (
    <Card sx={{ maxWidth: 200 ,height:160 ,marginLeft:2 , marginTop:2 }}>
      <CardMedia    
        sx={{ height: 100}}
        image={img4}
        title={props.tittle}
      />
      <CardContent>
        <Typography component="div"  fontSize={10} fontWeight={900} padding={0} >
          {props.heading}
        </Typography>
        <Typography variant="body2" color="text.black" fontWeight={700} fontSize={10} >
        {props.desc}
        </Typography>
      </CardContent>
       </Card>
  );
}