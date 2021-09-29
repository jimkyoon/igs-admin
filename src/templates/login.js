import * as React from "react";

import SignInBlock from "../organisms/signInBlock";

const Login = ({ setAlert }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = () => {
    if (email === "" || password === "") {
      setAlert({ isError: true, message: "Please fill in fields!" });
    }
    const isSuccessful = "sendLoginRequest(email, password)";
    if (isSuccessful === true) {
      setAlert({ isError: false, message: "Login successful!" });
    }
    if (isSuccessful === false) {
      setAlert({
        isError: true,
        message: "Login unsuccessful. Email/Password incorrect.",
      });
    }
  };

  return (
    <SignInBlock
      email={email}
      password={password}
      setEmail={setEmail}
      setPassword={setPassword}
      submitFunc={handleSubmit}
    />
  );
};

export default Login;
