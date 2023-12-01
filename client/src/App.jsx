import Home from "./components/Home/Home";
import "./App.css";
import { useSelector } from "react-redux";
import SignOut from "./components/Home/SignOut/SignOut";

function App() {
  const { isAuthenticated } = useSelector((state) => state.auth);
  return <div className="App">{isAuthenticated ? <SignOut /> : <Home />}</div>;
}

export default App;
