import { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import AuthContext from "./store/auth-context";

import "./App.css";

import ArticleDetails from "./components/articles/ArticleDetails";
import ArticleEdit from "./components/articles/ArticleEdit";
import ClassDetails from "./components/classes/ClassDetails";
import ClassEdit from "./components/classes/ClassEdit";
import CoachDetails from "./components/coaches/CoachDetails";
import CoachEdit from "./components/coaches/CoachEdit";
import Footer from "./components/Footer";
import Header from "./components/Header";
import UserProfile from "./components/Profile/UserProfile";

import About from "./pages/About";
import Blog from "./pages/Blog";
import Coaches from "./pages/Coaches";
import Contacts from "./pages/Contacts";
import Classes from "./pages/Classes";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NewArticlePage from "./pages/NewArticle";
import NewCoachPage from "./pages/NewCoach";
import NewClassPage from "./pages/NewClass";
import NotFoundPage from "./pages/NotFound";

function App() {
  const authContext = useContext(AuthContext);
  const isLoggedIn = authContext.isLoggedIn;

  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/classes" element={<Classes />} />
          <Route
            path="/new-class"
            element={isLoggedIn ? <NewClassPage /> : <Navigate to="/" />}
          />
          <Route path="/:id/details" element={<ClassDetails />} />
          <Route path="/:id/edit" element={<ClassEdit />} />
          <Route path="/:id/delete" element={<Classes />} />

          <Route path="/coaches" element={<Coaches />} />
          <Route
            path="/new-coach"
            element={isLoggedIn ? <NewCoachPage /> : <Navigate to="/" />}
          />
          <Route path="/coaches/:id/details" element={<CoachDetails />} />
          <Route path="/coaches/:id/edit" element={<CoachEdit />} />
          <Route path="/coaches/:id/delete" element={<Coaches />} />

          <Route path="/contacts" element={<Contacts />} />

          <Route path="/blog" element={<Blog />} />
          <Route
            path="/new-article"
            element={isLoggedIn ? <NewArticlePage /> : <Navigate to="/" />}
          />
          <Route path="/articles/:id/details" element={<ArticleDetails />} />
          <Route path="/articles/:id/edit" element={<ArticleEdit />} />
          <Route path="/articles/:id/delete" element={<Blog />} />

          <Route
            path="/login"
            element={!isLoggedIn ? <Login /> : <Navigate to="/" />}
          />
          <Route path="/logout" element={<Navigate to="/" />} />
          <Route
            path="/profile"
            element={isLoggedIn ? <UserProfile /> : <Navigate to="/login" />}
          />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
