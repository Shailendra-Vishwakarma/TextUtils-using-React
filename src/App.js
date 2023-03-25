import Navbar from "./components/Navbar";
import "./App.css";
import TextForm from "./components/TextForm";
import { useState } from "react";
import Alert from "./components/Alert";
import About from "./components/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
  };
  setTimeout(() => {
    setAlert(null);
  }, 3000);
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#071e42";
      showAlert(" Dark Mode has been enabled.", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert(" Light Mode has been enabled.", "success");
    }
  };
  return (
    <>
      <Router>
        
        <Navbar
          title="cybersploit"
          about="About Us"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
        <Switch>
            <Route exact path="/About">
              <About />
            </Route>
            <Route exact path="/">
              <TextForm
                heading="Enter text to analyze"
                mode={mode}
                showAlert={showAlert}
              />
            </Route>
            </Switch>
        </div>
        
      </Router>
    </>
  );
}

export default App;
