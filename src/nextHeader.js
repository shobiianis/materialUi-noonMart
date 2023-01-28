import {Tabs ,Tab,  Toolbar} from "@mui/material"

function AfterHead(){

return <div>

  <Toolbar >  
<Tabs aria-label="basic tabs example" sx={{mx:1 ,mt:3 }}   >
    <Tab label="ALL CATEGORIES" sx={{mr:8 , color:"blue" , fontWeight:900}} />
    <Tab label="ELECTRONINCS"  sx={{fontWeight:900 , color:"black" }} />
    <Tab label="MEN"  sx={{fontWeight:900 , color:"black" }}/>
    <Tab label="WOMEN"  sx={{fontWeight:900 , color:"black" }}/>
    <Tab label="HOME"   sx={{fontWeight:900 , color:"black" }}/>

    <Tab label="BEAUTY AND FRAGNANCE"  sx={{fontWeight:900 , color:"black" }}/>
    <Tab label="BABY AND TOYS"   sx={{fontWeight:900 , color:"black" }}/>
    <Tab label="SPORTS"  sx={{fontWeight:900 , color:"black" }} />
    <Tab label="BEST SELLER >"  sx={{fontWeight:900 , color:"black" }}/>


  </Tabs> 
  </Toolbar>
  </div>
}

export default AfterHead;