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
import { ContextProvider } from "./context/context";

const App = () => {
  return (
    <BrowserRouter>
      <ContextProvider>
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/contentdetail" element={<ContentDetail />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
        <Footer />
      </ContextProvider>
    </BrowserRouter>
  );
};

export default App;
