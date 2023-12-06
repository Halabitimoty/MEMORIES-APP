import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./App.css";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import Profile from "./components/Profile/Profile";
import Error from "./components/Error/Error";
import Dashboard from "./components/Dashboard/Dashboard";
import Test from "./components/Test/Test";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<SignIn />} />
            <Route path="signup" element={<SignUp />} />
          </Route>
          <Route path="profile" element={<Dashboard />}>
            <Route index element={<Profile />} />
          </Route>
          <Route path="test" element={<Test />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
