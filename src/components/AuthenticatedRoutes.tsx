import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import MainSection from "../templates/mainSection";
import Navbar from "../templates/Navbar";


const AuthenticatedRoutes: React.FC = ({ children }) => {
  return (
    <BrowserRouter>
      <Navbar />
      {children}
      <Switch>
        <MainSection />
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
