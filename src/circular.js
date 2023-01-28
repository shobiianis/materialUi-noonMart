import { padding } from "@mui/system";

function Circular(props){



return <div className="borderCircle" >

<img width={70} src={props.src} style={{paddingLeft:15, paddingTop:18 } } />
<p style={{fontWeight:"bold" , marginLeft:6 , marginTop:35}}> {props.write}</p>



</div>

}

export default Circular;