import { useDispatch } from "react-redux";
import { SignOutAction } from "../../actions/authAction";

function SignOut() {
  const getsessionID = sessionStorage.getItem("user");
  const sessionID = JSON.parse(getsessionID);
  const dispatch = useDispatch();
  const handleSignout = () => {
    dispatch(SignOutAction(sessionID.session_id));
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
