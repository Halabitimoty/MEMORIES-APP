import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import "./App.css";
import SignIn from "./components/Home/SignIn/SignIn";
import SignUp from "./components/Home/SignUp/SignUp";
import Profile from "./components/Profile/Profile";
import Error from "./components/Error/Error";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Home />}>
            <Route path="/" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Route>
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
