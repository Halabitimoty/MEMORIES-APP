import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import "./App.css";
import SignIn from "./components/Home/SignIn/SignIn";
import SignUp from "./components/Home/SignUp/SignUp";
import Profile from "./components/Profile/Profile";
import Error from "./components/Error/Error";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<SignIn />} />
            <Route path="signup" element={<SignUp />} />
          </Route>
          <Route path="/profile" element={<Dashboard />}>
            <Route index element={<Profile />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
