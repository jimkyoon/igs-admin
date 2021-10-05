import React from "react";
import AuthenticatedRoutes from "./components/AuthenticatedRoutes";
import BackgroundDiv from "./components/backgroundDiv";
import UnauthenticatedRoutes from "./components/UnauthenticatedRoutes";
import "./index.css";
import { AlertContextProvider } from "./utils/alertContext";
import { useAuthContext } from "./utils/authContext";

const App: React.FC = () => {
  const { user, loading } = useAuthContext();

  return (
    <AlertContextProvider>
      <BackgroundDiv>
        {loading ? null : user ? (
          <AuthenticatedRoutes />
        ) : (
          <UnauthenticatedRoutes />
        )}
      </BackgroundDiv>
    </AlertContextProvider>
  );
};

export default App;
