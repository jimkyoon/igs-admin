import React from "react";
import AuthenticatedRoutes from "./components/AuthenticatedRoutes";
import BackgroundDiv from "./components/backgroundDiv";
import UnauthenticatedRoutes from "./components/UnauthenticatedRoutes";
import { AlertContextProvider } from "./utils/alertContext";
import { useAuthContext } from "./utils/authContext";

import "./index.css"

const App: React.FC = () => {
  const { user } = useAuthContext();

  return (
    <AlertContextProvider>
      <BackgroundDiv>
        {user ? <AuthenticatedRoutes /> : <UnauthenticatedRoutes />}
      </BackgroundDiv>
    </AlertContextProvider>
  );
};

export default App;
