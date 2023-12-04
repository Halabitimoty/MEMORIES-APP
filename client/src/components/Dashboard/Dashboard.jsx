import "./Dashboard.css";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Dashboard() {
  const { isAuthenticated } = useSelector((state) => state.auth);
  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
}

export default Dashboard;
