import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import SignUp from "./Pages/Auth/SignUp";
import Login from "./Pages/Auth/Login";
import { Toaster } from "react-hot-toast";
import PrivateRoutes from "./utils/ProtectedRoutes";

function App() {
  return (
    <Router>
      <div>
        <Toaster position="top-center" reverseOrder={false} />
        <Routes>
          {/* Protected Routes */}
          <Route element={<PrivateRoutes />}>
            <Route path="/home" element={<Home />} />
          </Route>
          {/* ///////////////////// */}
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
