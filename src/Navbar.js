import { Link } from "react-router-dom";

const Navbar = () => {
    return (  
        <nav className="navbar"> 
        <h1>The Blog</h1>
            <Link to="/">Homepage</Link>
            <Link to="/create" style={{
                color: "pink",
                backgroundColor: "blue",
                borderRadius: "8px"
            }} >Create blog  </Link>
            <Link to="/about" >About Me</Link>
            <Link to="/weather">Weather App</Link>
            

        </nav>
    );
}
 
export default Navbar
