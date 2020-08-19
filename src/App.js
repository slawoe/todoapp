import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddTask from "./pages/AddTask";
import Header from "./pages/Header";
import Footer from "./pages/Footer";

function App() {
  return (
    <Router>
      <div className="mainBody">
        <header>
          <Header />
        </header>
        <main>
          <Switch>
            <Route path="/add">
              <AddTask />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
