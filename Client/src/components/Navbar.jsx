
import "../Styles/Nav.css"
import { NavLink} from "react-router-dom" 
export const Nav=()=>{

    return (
        <div className="nav">
           
                <NavLink NavLink to="/">Home</NavLink>
                <NavLink NavLink to="/login">Login</NavLink>
                <NavLink NavLink to="/signup" >signUp</NavLink>
         
        </div>
    )
}