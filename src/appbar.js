import { AppBar, Toolbar, Typography ,Box,Link } from "@mui/material";
import {Tabs ,Tab} from "@mui/material"
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import logo from './images/img1.jpeg'



function Header(props){

return <div>

<AppBar sx={ {backgroundColor:"#FEEF00"} }>  
<Toolbar>
  
  <img  src={logo} />
   
   <input className="headerSearch" placeholder="What are you looking for" />

   <Tabs aria-label="basic tabs example" sx={{mx:4}} >
    <Tab label="Sign In"  /><AssignmentIndIcon  sx={{mt:"14px" ,mx:-2 ,fontSize:"large" ,color:"black"}} />
    <Tab label="Cart"  /><ShoppingCartIcon sx={{mt:"14px" ,fontSize:"large" ,color:"black" }} />
  </Tabs> 

  
     
         
</Toolbar>
</AppBar>

</div>

}



export default Header;