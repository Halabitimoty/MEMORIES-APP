import Home from "./components/Home/Home";
import "./App.css";
import { useSelector } from "react-redux";
import SignOut from "./components/Home/SignOut/SignOut";

function App() {
  const { isAuthenticated, userData } = useSelector((state) => state.auth);
  console.log(userData);
  console.log(isAuthenticated);
  return <div className="App">{isAuthenticated ? <Home /> : <SignOut />}</div>;
}

export default App;
