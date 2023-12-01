import { useDispatch } from "react-redux";
import { SignOutAction } from "../../../actions/authAction";

function SignOut() {
  const dispatch = useDispatch();
  const handleSignout = () => {
    dispatch(SignOutAction());
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
