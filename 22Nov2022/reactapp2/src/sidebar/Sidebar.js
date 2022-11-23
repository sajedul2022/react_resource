import { Link } from "react-router-dom";

function Sidebar() {
    return (

        <div class="col-sm-4">
            <h2>Sidebar</h2>
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
    )
}

export default Sidebar;