import React from "react";
import "./app.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Components/container/Home";
import Subject from "./Components/container/Subject";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/:subjectName" exact component={Subject} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
