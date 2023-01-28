import './App.css';
import Header from './appbar';
import AfterHead from './nextHeader';
import picture from "./images/img2.jpeg"
import Circular from './circular';
import onePic from "./images/img3.jpeg"
import { Grid, Toolbar, Typography } from '@mui/material';
import MediaCard from './card2';
import MediaCardCart from './cart'
import img5 from './images/img5.jpeg'
import img6 from './images/img6.jpeg'
import 'bootstrap/dist/css/bootstrap.min.css';
import UncontrolledExample from './carousel'
import img10 from './images/img10.jpeg'
import img11 from './images/img11.jpeg'
import MediaCard3 from './card3';


function App() {

  let images = ["./images/img1"]

  return (
    <div>
      <Header />

      <br /><br />

      <AfterHead />

      <img src={picture} />

      <div style={{ display: "flex", justifyContent: "space-around", backgroundColor: "white"  }}>
        <Circular src={onePic} write={"laptop Sale"} />
        <Circular src={onePic} write={"Noon gift Card"} />
        <Circular src={onePic} write={"Deals"} />
        <Circular src={onePic} write={"Mobiles"} />
        <Circular src={onePic} write={"Beauty"} />
        <Circular src={onePic} write={"Mens Fashion"} />
        <Circular src={onePic} write={"womens fashion"} />
        <Circular src={onePic} write={"Home and Kitchen"} />
        <Circular src={onePic} write={"Baby"} />
      </div>
      <br /><br /><br />


      <Grid container >

        <Grid item xs={4}  marginLeft={1}> <h5 style={{ marginTop: 0 }}>More Reason To shop</h5>
          <div style={{ display: "flex" }}>
            <MediaCard heading={"Top Rated Products"} desc={"Get the best at the best prices"}></MediaCard>
            <MediaCard heading={"Top Rated Products"} desc={"Get the best at the best prices"}></MediaCard>
          </div>
          <div style={{ display: "flex" }}>
            <MediaCard heading={"Top Rated Products"} desc={"Get the best at the best prices"}></MediaCard>
            <MediaCard heading={"Top Rated Products"} desc={"Get the best at the best prices"}></MediaCard>
          </div>
        </Grid>

        <Grid item xs={4}  marginLeft={1} style={{backgroundColor:"#FFF0BE"}}>
          <h4 style={{ marginTop: 0 }}>MEGA DEALS OF THE DAY</h4>
          <div style={{ display: "flex" }}>
            <MediaCard heading={"Top Rated Products"} desc={"Get the best at the best prices"}></MediaCard>
            <MediaCard heading={"Top Rated Products"} desc={"Get the best at the best prices"}></MediaCard>
          </div>

          <div style={{ display: "flex" }}>
            <MediaCard heading={"Top Rated Products"} desc={"Get the best at the best prices"}></MediaCard>
            <MediaCard heading={"Top Rated Products"} desc={"Get the best at the best prices"}></MediaCard>
          </div>
        </Grid>

        <Grid item xs={3} marginLeft={1} >
          <h4 style={{ marginTop: 0 }}>In focus</h4>
          <div>
            <img src={img5} style={{width:320 ,height:180}}/>
            <img src={img6} style={{width:320 ,height:180}}/>
          </div>
        </Grid>
      </Grid>
   
      <br />

      <h3 style={{color:"grey" , fontWeight:700 , marginLeft:20 , fontSize:20 }}> Recommended for you</h3>
        
        <Grid container marginLeft={2}>
        <Grid item xs={3} >
          
          <MediaCardCart heading={"Apple Iphone14 Pro Max 256GB Deep Purple 5G with FaceTime-Middle East ..."} desc={"Aed 5057.00"} />
            
         </Grid>
         <Grid item xs={3} >
          
          <MediaCardCart heading={"Apple Iphone14 Pro Max 256GB Deep Purple 5G with FaceTime-Middle East ..."} desc={"Aed 5057.00"} />
            
         </Grid>

         <Grid item xs={3} >
          
          <MediaCardCart heading={"Apple Iphone14 Pro Max 256GB Deep Purple 5G with FaceTime-Middle East ..."} desc={"Aed 5057.00"} />
            
         </Grid>
         <Grid item xs={3} >
          
          <MediaCardCart heading={"Apple Iphone14 Pro Max 256GB Deep Purple 5G with FaceTime-Middle East ..."} desc={"Aed 5057.00"} />
            
         </Grid>
        </Grid>
       

        <div style={{marginTop:20}}>
          <UncontrolledExample />
        </div>
  
       <img width={"100%"} src={img10} style={{marginTop:10,marginLeft:5}}  />
          
       <h3 style={{color:"black" , fontWeight:700 , marginLeft:20 , marginTop:10 ,fontSize:20 }}> Trending Deals In electronics</h3>
       <Grid container marginLeft={2}>

        <Grid item xs={3} >
          
          <MediaCardCart heading={"Apple Iphone14 Pro Max 256GB Deep Purple 5G with FaceTime-Middle East ..."} desc={"Aed 5057.00"} />
            
         </Grid>
         <Grid item xs={3} >
          
          <MediaCardCart heading={"Apple Iphone14 Pro Max 256GB Deep Purple 5G with FaceTime-Middle East ..."} desc={"Aed 5057.00"} />
            
         </Grid>

         <Grid item xs={3} >
          
          <MediaCardCart heading={"Apple Iphone14 Pro Max 256GB Deep Purple 5G with FaceTime-Middle East ..."} desc={"Aed 5057.00"} />
            
         </Grid>
         <Grid item xs={3} >
          
          <MediaCardCart heading={"Apple Iphone14 Pro Max 256GB Deep Purple 5G with FaceTime-Middle East ..."} desc={"Aed 5057.00"} />
            
         </Grid>
        </Grid>

        <img src={img11} width={"100%"} />


        <Toolbar style={{backgroundColor:"black" ,marginTop:10}} >
          <Typography color={"yellow"} fontWeight={"bolder"} fontSize={30}>
          50-80% OFF
          </Typography>
          </Toolbar>
          
      <div className='womenFashion'>
      <Typography color={"Black"} fontWeight={"bolder"} fontSize={30} marginLeft={3}>
          WOMEN'S FASHION
          </Typography>

           <Grid container style={{ display: "flex", justifyContent: "space-around"}}>
             
             <Grid item xs={2}><MediaCard3 /></Grid>
             <Grid item xs={2}><MediaCard3 /></Grid>
             <Grid item xs={2}><MediaCard3 /></Grid>
             <Grid item xs={2}><MediaCard3 /></Grid>
             <Grid item xs={2}><MediaCard3 /></Grid>
             <Grid item xs={2}><MediaCard3 /></Grid>
           </Grid>



      </div>          

    </div>


  );
}

export default App;
