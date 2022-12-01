import { Link } from "react-router-dom";

    function Header() {
        return (

          <header id="header" className="fixed-top">
          <div className="container d-flex align-items-center">
          
            <h1 className="logo me-auto"><Link to="/">Sajedul Mentor</Link></h1>
          
          
            <nav id="navbar" className="navbar order-last order-lg-0">
              <ul>
                <li><Link  to="/">Home</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/AllCourses">Courses</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
              </ul>
              <i className="bi bi-list mobile-nav-toggle"></i>
            </nav>
          
            {/* <Link to="/" className="get-started-btn">Get Started</Link> */}
          
          </div>
          </header>
        )
    }



export default Header;

