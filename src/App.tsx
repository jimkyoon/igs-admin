import React from "react";
import AlertBar from "./components/alertBar";
import BackgroundDiv from "./components/backgroundDiv";
import Login from "./templates/login";
import MainSection from "./templates/mainSection";
import { AlertContextProvider, useAlertContext } from "./utils/alertContext";
import { useAuthContext } from "./utils/authContext";

const App: React.FC = () => {
  const { user } = useAuthContext();
  const { alert, setAlert } = useAlertContext();

  return (
    <AlertContextProvider>
      <BackgroundDiv>
        {user ? <MainSection setAlert={setAlert} /> : <Login />}
        {alert ? <AlertBar isError={Boolean(alert)}>{alert}</AlertBar> : null}
      </BackgroundDiv>
    </AlertContextProvider>
  );
};

export default App;
