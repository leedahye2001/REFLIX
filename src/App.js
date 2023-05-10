import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
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
import Year from "./pages/test/Year";
import Type from "./pages/test/Type";
import Genre from "./pages/test/Genre";
import SearchResult from "./pages/SearchResult";

const App = () => {
  const { user } = useUserState();
  return (
    <div>
      <Header />
      <div>
        {user ? (
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/contents/detail/:id" element={<ContentDetail />} />

            {/* <Route path="/contentdetail" element={<ContentDetail />} /> */}
            <Route path="/mypage/:id" element={<MyPage />} />
            <Route path="/profile/:id" element={<Profile />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<Home />} exact />
            {/* <Route path="/mypage" element={<MyPage />} />
            <Route path="/profile" element={<Profile />} /> */}
            <Route path="/search" element={<SearchResult />} />
            <Route path="/contentdetail" element={<ContentDetail />} />
            <Route path="/year" element={<Year />} />
            <Route path="/type" element={<Type />} />
            <Route path="/genre" element={<Genre />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="recommendlist" element={<RecommendList />} />
          </Routes>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default App;
