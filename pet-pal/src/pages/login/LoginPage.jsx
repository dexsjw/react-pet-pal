// src/pages/login/Login.jsx
import { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Avatar,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import useOwnerContext from "../../contexts/useOwnerContext";

function LoginPage() {
  const { ownerState, handleOwnerLogin } = useOwnerContext();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleCredentialsChange = (e) => {
    setCredentials((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const handleLogin = async () => {
    handleOwnerLogin(credentials);
    if (ownerState.jwtToken) {
      // localStorage.setItem("jwtToken": ownerState.jwtToken);
      navigate("/view-pet");
    } else {
      alert("Wrong credentials provided!");
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 8,
        }}
      >
        <Avatar
          alt="Paw Icon"
          src="https://images.dog.ceo/breeds/collie-border/n02106166_59.jpg"
          // src='../../common/images/paw-icon.png'
          sx={{ width: 250, height: 250 }}
          classes={{ margin: "10px" }}
        />
        <Typography variant="h1">Pet Pal</Typography>
        <Box component="form" sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={credentials.email}
            onChange={handleCredentialsChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Password"
            name="password"
            type="password"
            value={credentials.password}
            onChange={handleCredentialsChange}
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleLogin}
          >
            Login
          </Button>
          <Button
            fullWidth
            variant="outlined"
            color="secondary"
            onClick={() => navigate("/register")}
          >
            Register
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default LoginPage;
