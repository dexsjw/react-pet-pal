import { useState } from "react";
import Joi from 'joi-browser';
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
import { JWT_TOKEN } from "../../service/PetPalService";
import { toast } from "react-toastify";

const schema = {
  email: Joi.string().email().required(),
  password: Joi.string().min(1).max(30).required()
}

function LoginPage() {
  const { handleOwnerLogin } = useOwnerContext();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

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
    if (!error) {
      try {
        await handleOwnerLogin(credentials);
      } catch (error) {
        console.log("Error: ", error);
      } finally {
        if (localStorage.getItem(JWT_TOKEN)) {
          navigate("/view-pet");
        } else {
          toast.error("Wrong credentials provided!");
        }
      }
    } else {
      for (const errMsg of error.details) {
        toast.error(errMsg.message);
      }
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
