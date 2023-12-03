import "./Home.css";
import { Outlet, Link } from "react-router-dom";

function Home() {
  return (
    <div className="Home">
      <div className="Home-Title">Memory App</div>
      <div className="Home-Toggle">
        <Link to="/signin" className="Sign-In-Button">
          Sign In
        </Link>
        <Link to="/signup" className="Sign-Up-Button">
          Sign Up
        </Link>
      </div>
      <section className="Sign-Form">
        <Outlet />
      </section>
    </div>
  );
}

export default Home;
