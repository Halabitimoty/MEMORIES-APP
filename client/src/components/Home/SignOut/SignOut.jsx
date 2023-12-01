import { useDispatch } from "react-redux";
import { logout } from "../../../slice/authSlice";

function SignOut() {
  const dispatch = useDispatch();
  const handleSignout = () => {
    dispatch(logout());
  };
  return (
    <div className="SignOut">
      <p>SignOut</p>
      <button className="SignOut" onClick={handleSignout}>
        SignOut
      </button>
    </div>
  );
}

export default SignOut;
