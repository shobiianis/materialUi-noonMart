import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import img7 from './images/img7.jpeg'

export default function MediaCardCart(props) {
  return (
    <Card sx={{ maxWidth: 300 ,height:600 ,marginLeft:2 , marginTop:2 }}>
      <CardMedia    
        sx={{ height: 400}}
        image={img7}
        title={props.tittle}
      />
      <CardContent>
        <Typography component="div"  fontSize={14} fontWeight={900} padding={0} >
          {props.heading}
        </Typography>
        <Typography variant="body2" color="text.black" fontWeight={700} fontSize={15} paddingTop={3} >
        {props.desc}<br />
        <s style={{color:"grey" , fontWeight:500 ,fontSize:10}}>5099</s>
        </Typography>
       
      </CardContent>
       </Card>
  );
}