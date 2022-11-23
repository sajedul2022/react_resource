import { Link } from "react-router-dom";


function Navbar() {
    return (
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
            <div class="container-fluid">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <Link to="/" class="nav-link active" > Home </Link> 
                    </li>
                    <li class="nav-item">
                        <Link to="/About" class="nav-link" > About </Link> 
                    </li>

                    <li class="nav-item">
                        <Link to="/Contact" class="nav-link" > Contact </Link> 
                    </li>

                    <li class="nav-item">
                        <Link to="/Garage" class="nav-link" > Garage </Link> 
                    </li>
                    

                </ul>
            </div>
        </nav>
    )
}

export default Navbar;