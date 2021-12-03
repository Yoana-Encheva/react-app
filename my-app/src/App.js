import { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import AuthContext from "./store/auth-context";

import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Classes from "./pages/Classes";
import Coaches from "./pages/Coaches";
import Contacts from "./pages/Contacts";
import Blog from "./pages/Blog";
import Login from "./pages/Login";
import UserProfile from "./components/Profile/UserProfile";
import NewClassPage from "./pages/NewClass";
import NotFoundPage from "./pages/NotFound";
import ClassDetails from "./components/classes/ClassDetails";
import ClassEdit from "./components/classes/ClassEdit";
import Footer from "./components/Footer";

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
          <Route path="/coaches" element={<Coaches />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/blog" element={<Blog />} />
          <Route
            path="/login"
            element={!isLoggedIn ? <Login /> : <Navigate to="/" />}
          />
          <Route path="/logout" element={<Navigate to="/" />} />
          <Route
            path="/profile"
            element={isLoggedIn ? <UserProfile /> : <Navigate to="/login" />}
          />
          <Route path="/:id/details" element={<ClassDetails />} />
          <Route path="/:id/edit" element={<ClassEdit />} />
          <Route path="/:id/delete" element={<Classes />} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
