import { Outlet, Link } from "react-router-dom";
import '../App.css';

const Layout = () => {
  return (
    <>
      <div className="navigation">
        <div className="sidebar">
          <nav>
            <div className="links">
                <Link style={{ color: "white" }} to="/">
                  Home
                </Link>
            </div>
            <div className="links">
                <Link style={{ color: "white" }} to="/create">
                  Create a Crewmate!
                </Link>
            </div>
            <div className="links">
                <Link style={{ color: "white" }} to="/gallery">
                  Crewmate Gallery
                </Link>
            </div>
          </nav>
        </div>

        <div className="content">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;