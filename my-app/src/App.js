import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Classes from "./components/Classes";
import NewClassPage from "./pages/NewClass";
import Coaches from "./components/Coaches";
import Contacts from "./components/Contacts";
import Blog from "./components/Blog";
import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/new-class" element={<NewClassPage />} />
        <Route path="/coaches" element={<Coaches />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
