import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import AddTask from "./pages/AddTask";
import Header from "../src/components/Header";
import Footer from "./components/Footer";
import styled from "@emotion/styled";
import GlobalStyles from "./GlobalStyles";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-rows: 10% 1fr 10%;
  grid-template-columns: 5% auto 5%;
`;

const MainContainer = styled.main`
  grid-row-start: 2;
  grid-row-end: 3;
  grid-column-start: 2;
  grid-column-end: 3;
  margin: 10px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Container>
          <Header />
          <MainContainer>
            <Switch>
              <Route path="/add">
                <AddTask />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </MainContainer>
          <Footer />
        </Container>
      </Router>
    </>
  );
}

export default App;
