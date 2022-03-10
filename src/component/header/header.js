import "./style.css"
import Logo from "../../assets/images/logo.png"
const Header=()=>{
    return(
        <div>
     {/* Logo_div */}
     <div className="Logo_div">
         <img src={Logo} alt=""/>
     </div>
        </div>
    )
}
export default Header;