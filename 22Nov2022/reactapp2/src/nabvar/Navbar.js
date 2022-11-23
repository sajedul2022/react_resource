import { Link } from "react-router-dom";
import Content from "../pages/Content";


function Navbar() {
    return (
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
            <div class="container-fluid">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <Link to="/" class="nav-link active" > Home </Link> 
                    </li>
                    <li class="nav-item">
                       
                    </li>
                    

                </ul>
            </div>
        </nav>
    )
}

export default Navbar;