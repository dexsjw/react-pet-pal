import Joi from 'joi-browser';
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
// import { login } from "../../service/PetPalService";
import { getAllOwnerAuth, getOwner } from '../../service/PetPalMockService';

const schema = {
  email: Joi.string().email().required(),
  password: Joi.string().min(1).max(30).required()
}

function LoginPage() {
  const { setOwnerState } = useOwnerContext();
  const location = useLocation();
  const navigate = useNavigate();
  const to = location.state?.from?.pathname || "/view-pet";
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

  const validate = (event) => {
    const {name, value} = event.target;
    const comparisonObj = {[name]: value};
    const comparisonSchema = {[name]: schema[name]};
    let result = {}
    if (name !== "email") {
      result = Joi.validate(comparisonObj, comparisonSchema);
    }
    const { error } = result;
    if (error) return error.details[0].message;
    else return null;
  }

  const handleCredentialsChange = (e) => {
    setCredentials((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
    const errorMessage = validate(e);
    if (errorMessage) {
      toast.warning(errorMessage);
    }
  };

  const handleLogin = async () => {
    const result = Joi.validate(credentials, schema, { abortEarly: false });
    const {error} = result;
    if (error) {
      for (const errMsg of error.details) {
        toast.error(errMsg.message);
      }
    }

    // const response = await login(credentials);
    const response = await authenticateLogin(credentials);
    if (response.error) {
      toast.error(response.status);
    } else {
      console.log("success!")
      setOwnerState(response.owner);
      navigate(to, { replace: true });
      toast.success("Login successful");
    }
  };

  const authenticateLogin = async (credentials) => {
    const allMockOwnerAuth = await getAllOwnerAuth();
    for (const mockOwnerAuth of allMockOwnerAuth) {
      if (credentials.email === mockOwnerAuth.email && credentials.password === mockOwnerAuth.password) {
        const mockOwner = await getOwner(mockOwnerAuth.ownerId);
        return {
					owner: mockOwner
				};
      } else {
        return {
					error: "Invalid credentials!",
					status: "Invalid credentials!"
        }
      }
    }
  }

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
