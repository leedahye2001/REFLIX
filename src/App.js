import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Home from "./pages/Home";
import Header from "./components/nav/Header";
import Footer from "./components/nav/Footer";
import Profile from "./pages/Profile";
import MyPage from "./pages/MyPage";
import ContentDetail from "./pages/ContentDetail";
import { useUserState } from "./context/context";

const App = () => {
  const { user } = useUserState();
  return (
    <div>
      <Header />
      <div>
        {user ? (
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/contentdetail" element={<ContentDetail />} />
            <Route path="/mypage/:email" element={<MyPage />} />
            <Route path="/profile/:email" element={<Profile />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/contentdetail" element={<ContentDetail />} />
          </Routes>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default App;
