import { useState, useEffect } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Avatar,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import useOwnerContext from "../../contexts/useOwnerContext";
import { JWT_TOKEN } from "../../service/PetPalService";
import { toast } from "react-toastify";
import { login } from "../../service/PetPalService";

function LoginPage() {
  const { setOwnerState } = useOwnerContext();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/view-pet";
  const isLoggedIn = localStorage.getItem(JWT_TOKEN) ? true : false;

  useEffect(() => {
    if (location.state?.from?.pathname && !isLoggedIn) {
      toast.warning("You need to log in to view that page");
    } else if (isLoggedIn) {
      toast.warning("You're already logged in, redirecting...");
      setTimeout(() => {
        navigate("/view-pet");
      }, 3000);
    }
  }, []);
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleCredentialsChange = (e) => {
    setCredentials((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const handleLogin = async () => {
    const response = await login(credentials);
    if (response.error) {
      toast.error(response.status);
    } else {
      console.log("success!")
      setOwnerState(response.owner);
      navigate(from, { replace: true });
      toast.success("Login successful");
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
