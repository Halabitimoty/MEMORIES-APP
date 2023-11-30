import { useState } from "react";
import "./SignIn.css";
import { useDispatch, useSelector } from "react-redux";
import { SignInAction } from "../../../actions/authAction";

function SignIn() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);
  const [signInData, setSignInData] = useState({ email: "", password: "" });
  const handlelogin = () => {
    dispatch(SignInAction(signInData));
  };

  return (
    <>
      <form action="" className="SignIn">
        <input
          type="email"
          name="email"
          id="SignIn-Email"
          value={signInData.email}
          onChange={(e) =>
            setSignInData({ ...signInData, email: e.target.value })
          }
          placeholder="Email"
          required
        />
        <input
          type="password"
          name="password"
          id="SignIn-Password"
          value={signInData.password}
          onChange={(e) =>
            setSignInData({ ...signInData, password: e.target.value })
          }
          placeholder="**************"
        />
        <button
          className="Sign-In-Button-Form"
          type="submit"
          onClick={handlelogin}
          disabled={loading}
        >
          {loading ? "Sign In..." : "Sign In"}
        </button>
      </form>
    </>
  );
}

export default SignIn;
