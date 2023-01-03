import React from "react";

// import "../App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "../Pages/Home";
import { Products } from "../Pages/Products";
import { Stack } from "../Pages/Stack";
import { Bets } from "../Pages/Bets";
import { Blog } from "../Pages/Blog";
import { CV } from "../Pages/CV";
import { Test } from "../Pages/Test";
import { Changelog } from "../Pages/Changelog";

/**
 * @author
 * @function Main
 **/

export const Main = (props) => {
  return (
    // <React.Fragment>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/products" exact>
          <Products />
        </Route>
        <Route path="/products" exact>
          <Products />
        </Route>
        <Route path="/bets" exact>
          <Bets />
        </Route>
        <Route path="/stack" exact>
          <Stack />
        </Route>
        <Route path="/blog" exact>
          <Blog />
        </Route>
        <Route path="/cv" exact>
          <CV />
        </Route>
        <Route path="/test" exact>
          <Test />
        </Route>
        <Route path="/changelog" exact>
          <Changelog />
        </Route>
      </Switch>
    </BrowserRouter>
    // </React.Fragment>
  );
};
