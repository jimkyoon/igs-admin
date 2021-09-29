import * as React from "react";

// components
import TextInput from "../components/textInput";
import ButtonFilled from "../components/buttonFilled";

const SignInBlock = ({
  email,
  password,
  setEmail,
  setPassword,
  submitFunc,
}) => {
  return (
    <div>
      <TextInput
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        type="email"
        value={email}
      />
      <TextInput
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        type="password"
        value={password}
      />
      <ButtonFilled onClick={submitFunc}>Sign In</ButtonFilled>
    </div>
  );
};

export default SignInBlock;
