import logo from "./logo.svg";
import "./App.css";
import { Button } from "react-bootstrap";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Classes from "./components/Classes";
import Coaches from "./components/Coaches";
import Contacts from "./components/Contacts";
import Blog from "./components/Blog";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Button variant="success">Button #1</Button>
      <Header />

      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/coaches" element={<Coaches />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
