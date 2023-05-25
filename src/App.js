import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Header from "./components/nav/Header";
import Footer from "./components/nav/Footer";
import Profile from "./pages/Profile";
import MyPage from "./pages/MyPage";
import ContentDetail from "./pages/ContentDetail";
import { useUserState } from "./context/context";
import RecommendList from "./pages/RecommendList";
import SearchResult from "./pages/SearchResult";
import Test from "./pages/Test";

const App = () => {
  const { user } = useUserState();

  return (
    <div>
      <Header />
      <div>
        {user ? (
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/search" element={<SearchResult />} />
            <Route
              path="/contents/detail/:contentId/:category"
              element={<ContentDetail />}
            />
            <Route path="/test" element={<Test />} />
            <Route path="/mypage/:id" element={<MyPage />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/recommendlist" element={<RecommendList />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/search" element={<SearchResult />} />
            <Route
              path="/contents/detail/:contentId/:category"
              element={<ContentDetail />}
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default App;
