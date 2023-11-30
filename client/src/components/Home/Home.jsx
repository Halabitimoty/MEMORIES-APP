import { useState } from "react";
import "./Home.css";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";

function Home() {
  const [toggleForm, setToggleForm] = useState(false);

  return (
    <div className="Home">
      <div className="Home-Title">Memory App</div>
      <div className="Home-Toggle">
        <button className="Sign-In-Button" onClick={() => setToggleForm(true)}>
          Sign In
        </button>
        <button className="Sign-Up-Button" onClick={() => setToggleForm(false)}>
          Sign Up
        </button>
      </div>
      <section className="Sign-Form">
        {toggleForm ? <SignIn /> : <SignUp />}
      </section>
    </div>
  );
}

export default Home;
