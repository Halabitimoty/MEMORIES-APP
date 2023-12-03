import "./Dashboard.css";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

function Dashboard(props) {
  const { Profile } = props;
  console.log(props);
  const { isAuthenticated } = useSelector((state) => state.auth);
  return (
    <Route
      render={() => {
        isAuthenticated ? <Profile /> : <Redirect to="/" />;
      }}
    />
  );
}

export default Dashboard;
