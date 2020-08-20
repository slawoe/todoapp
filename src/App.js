import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import AddTask from "./pages/AddTask";
import Header from "../src/components/Header";
import Footer from "./components/Footer";
import styled from "@emotion/styled";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-rows: 10% 1fr 10%;
  grid-template-columns: 5% auto 5%;
`;

function App() {
  return (
    <Router>
      <Container>
        <Header />
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
        <Footer />
      </Container>
    </Router>
  );
}

export default App;
