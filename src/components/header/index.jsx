import style from "./header.module.css"
import logo from "../../assets/react.svg";


const Header=({title})=>{
    return(
        <div className={style.app_container}>
            <div className={style.app_logo}>
              <h3>{title || "MyApp"}</h3>
              <img  src={logo} alt="react_logo" />
            </div>
            <nav>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </nav>
           
        </div>
    )
}
export default Header;