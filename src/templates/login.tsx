import {
  Box,
  Button,
  FormControl,
  Input,
  Typography,
} from "@mui/material";
import React from "react";
import { useAlertContext } from "../utils/alertContext";
import { useAuthContext } from "../utils/authContext";

const Login = () => {
  const { setAlert } = useAlertContext();
  const { login } = useAuthContext();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (email === "" || password === "") {
      setAlert("Please fill in fields!");
    }
    await login(email, password);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        bgcolor: "background.paper",
        overflow: "hidden",
        borderRadius: "12px",
        boxShadow: 1,
        fontWeight: "bold",
        maxWidth: "400px",
        margin: "auto",
        marginTop: "20vh",
        padding: "3rem 1rem",
      }}
    >
      <Typography variant="h4" gutterBottom={true}>
        CMS Sign In
      </Typography>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "250px",
        }}
      >
        <FormControl style={{ marginBottom: "1rem" }}>
          <Input
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            type="email"
            value={email}
          />
        </FormControl>
        <FormControl style={{ marginBottom: "1rem" }}>
          <Input
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            type="password"
            value={password}
          />
        </FormControl>
        <Button type="submit" variant="contained" style={{ marginTop: "1rem" }}>
          Sign In
        </Button>
      </form>
    </Box>
  );
};

export default Login;
