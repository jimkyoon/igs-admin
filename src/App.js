import * as React from "react";

// components
import BackgroundDiv from "./components/backgroundDiv";
import Login from "./templates/login";
import MainSection from "./templates/mainSection";
import AlertBar from "./components/alertBar";

function App() {
  // any errors or success messages
  const [alert, setAlert] = React.useState({
    isError: true,
    message: "testing",
  });

  React.useEffect(() => {
    // after component mounts, if message is there, after 5 seconds, disppears
    const timer = setTimeout(() => {
      setAlert({ ...alert, message: "" });
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [alert]);

  const user = true;

  return (
    <BackgroundDiv>
      {user ? (
        <MainSection setAlert={setAlert} />
      ) : (
        <Login setAlert={setAlert} />
      )}
      {alert.message.length !== 0 ? (
        <AlertBar isError={alert.isError}>{alert.message}</AlertBar>
      ) : null}
    </BackgroundDiv>
  );
};

export default App;
