import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainSection from "../templates/MainSection";
import Navbar from "../templates/Navbar";

const AuthenticatedRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="*">
          <MainSection />
        </Route>
        {/* <Route exact path={Routes.ARTICLES}>
          <MainSection />
        </Route>
        <Route path={Routes.GREETINGS}></Route>
        <Route path={Routes.SOUNDS}></Route> */}
      </Switch>
    </BrowserRouter>
  );
};

export default AuthenticatedRoutes;
