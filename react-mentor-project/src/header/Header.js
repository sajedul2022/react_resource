import { Link } from "react-router-dom";

    function Header() {
        return (

          <header id="header" className="fixed-top">
          <div className="container d-flex align-items-center">
          
            <h1 className="logo me-auto"><Link to="/">Mentor</Link></h1>
          
            <Link to="/" className="logo me-auto">

              </Link>
          
            <nav id="navbar" className="navbar order-last order-lg-0">
              <ul>
                <li><Link  to="/">Home</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/AllCourses">Courses</Link></li>
                {/* <li><Link to="/">Trainers</Link></li>
                <li><Link to="/">Events</Link></li>
                <li><Link to="/">Pricing</Link></li>
                <li><Link to="/">Contact</Link></li> */}
              </ul>
              <i className="bi bi-list mobile-nav-toggle"></i>
            </nav>
          
            {/* <Link to="/" className="get-started-btn">Get Started</Link> */}
          
          </div>
          </header>
        )
    }



export default Header;

