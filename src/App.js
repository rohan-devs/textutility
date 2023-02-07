import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textforms from "./components/Textforms";
import React from "react";
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";

function App() {
  const [Mode, setMode] = useState("dark");

  const tmode = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showalert("dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showalert("light mode has been enabled", "success");
    }
  };
  const [alertt, setalertt] = useState("this is a default alert");
  const showalert = (message, type) => {
    setalertt({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      showalert(null);
    }, 1200);
  };

  return (
    <>
      <Router>
        <Navbar
          title="Text Utility Site"
          about="about"
          mode={Mode}
          toggleMode={tmode}
        />

        <Alert alert={alertt} />

        <Routes>
          <Route
            exact
            path="/"
            element={<Textforms heading=" " h11="PLAY WITH TEXT" mode={Mode} />}
          />
          <Route exact path="/about" element={<About mode={Mode} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
