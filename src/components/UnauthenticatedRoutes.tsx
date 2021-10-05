import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Login from "../templates/login";

const UnauthenticatedRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route path="/signup">{/* <SignUp /> */}</Route>
        <Route
          path="*"
          render={({ location }) => {
            return (
              <Redirect
                to={{ pathname: "/login", state: { from: location } }}
              />
            );
          }}
        ></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default UnauthenticatedRoutes;
