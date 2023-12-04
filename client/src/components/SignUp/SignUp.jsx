import { useState } from "react";
import "./SignUp.css";

function SignUp() {
  const [signUpData, setSignUpData] = useState({
    clientname: "",
    email: "",
    password: "",
  });

  return (
    <>
      <form action="" className="SignUp">
        <input
          type="text"
          name="clientname"
          id="SignUp-Name"
          value={signUpData.clientname}
          onChange={(e) =>
            setSignUpData({ ...signUpData, clientname: e.target.value })
          }
          placeholder="Full Name"
          required
        />
        <input
          type="email"
          name="email"
          id="SignUp-Email"
          value={signUpData.email}
          onChange={(e) =>
            setSignUpData({ ...signUpData, email: e.target.value })
          }
          placeholder="Email"
          required
        />
        <input
          type="password"
          name="password"
          id="SignUp-Password"
          value={signUpData.password}
          onChange={(e) =>
            setSignUpData({ ...signUpData, password: e.target.value })
          }
          placeholder="**************"
        />
        <button className="Sign-Up-Button-Form" type="submit">
          Sign Up
        </button>
      </form>
    </>
  );
}

export default SignUp;
