import React from "react";
import {
  Box,
  Button,
  FormControl,
  Input,
  InputLabel,
  Typography,
} from "@mui/material";

const Login = ({ setAlert }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setAlert({ isError: true, message: "Please fill in fields." });
    }
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
          <InputLabel htmlFor="email">Email</InputLabel>
          <Input
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            type="email"
            value={email}
          />
        </FormControl>
        <FormControl style={{ marginBottom: "1rem" }}>
          <InputLabel htmlFor="email">Password</InputLabel>
          <Input
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            type="password"
            value={password}
          />
        </FormControl>
        <Button
          type="submit"
          label="login"
          variant="contained"
          style={{ marginTop: "1rem" }}
        >
          Sign In
        </Button>
      </form>
    </Box>
  );
};

export default Login;
