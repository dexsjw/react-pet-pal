// src/pages/register/RegisterPage.jsx
import { useState, useEffect } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  MenuItem,
  Select,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { register } from "../../service/PetPalService";
import { JWT_TOKEN } from "../../service/PetPalService";
import { toast } from "react-toastify";
import useOwnerContext from "../../contexts/useOwnerContext";

function Register() {
  const isLoggedIn = localStorage.getItem(JWT_TOKEN) ? true : false;
  const { setOwnerState } = useOwnerContext();

  useEffect(() => {
    if (isLoggedIn) {
      toast.warning("You're already logged in, redirecting...");
      setTimeout(() => {
        navigate("/view-pet");
      }, 3000);
    }
  }, []);
  const [formData, setFormData] = useState({
    petName: "",
    areaLocation: "",
    petGender: "",
    petBreed: "",
    petAge: "",
    petSize: "",
    petIsNeutered: "",
    petDescription: "",
    ownerName: "",
    email: "",
    password: "",
    petPicture: [],
  });

  const [photoPreview, setPhotoPreview] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData((prevState) => ({
        ...prevState,
        petPicture: [reader.result],
      }));
      setPhotoPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await register(formData);
    if (response.error) {
      toast.error(response.status);
    } else {
      setOwnerState(response.owner);
      navigate("/view-pet");
      toast.success("Registration successful");
      
    }
  };

  return (
    <div style={{ margin: "2rem" }}>
      <Container maxWidth="md">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            mb: 3,
          }}
        >
          <Box
            sx={{
              width: "300px",
              height: "300px",
              border: "1px solid #ccc",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {photoPreview ? (
              <img
                src={photoPreview}
                alt="Pet"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            ) : (
              <Typography variant="body1">Pet Photo</Typography>
            )}
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            <Button
              variant="contained"
              component="label"
              sx={{ width: "260px", mb: 2 }}
            >
              Upload Pet Photo
              <input type="file" hidden onChange={handleFileChange} />
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              sx={{ width: "260px", mb: 2 }}
            >
              Register
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => navigate("/")}
              sx={{ width: "260px", mb: 2 }}
            >
              Cancel
            </Button>
          </Box>
        </Box>
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            margin="normal"
            required
            fullWidth
            label="Pet Name"
            name="petName"
            value={formData.petName}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Location"
            name="areaLocation"
            value={formData.areaLocation}
            onChange={handleChange}
          />
          <FormControl component="fieldset" sx={{ mt: 2 }}>
            <FormLabel component="legend">Pet Gender</FormLabel>
            <RadioGroup
              row
              name="petGender"
              value={formData.petGender}
              onChange={handleChange}
            >
              <FormControlLabel value="Male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="Female"
                control={<Radio />}
                label="Female"
              />
            </RadioGroup>
          </FormControl>
          <TextField
            margin="normal"
            required
            fullWidth
            label="Pet Breed"
            name="petBreed"
            value={formData.petBreed}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Pet Age"
            name="petAge"
            value={formData.petAge}
            onChange={handleChange}
          />
          <FormControl fullWidth sx={{ mt: 2 }}>
            <FormLabel component="legend">Pet Size</FormLabel>
            <Select
              name="petSize"
              value={formData.petSize}
              onChange={handleChange}
            >
              <MenuItem value="Small">Small</MenuItem>
              <MenuItem value="Medium">Medium</MenuItem>
              <MenuItem value="Large">Large</MenuItem>
            </Select>
          </FormControl>
          <FormControl component="fieldset" sx={{ mt: 2 }}>
            <FormLabel component="legend">Pet Neutered</FormLabel>
            <RadioGroup
              row
              name="petIsNeutered"
              value={formData.petIsNeutered}
              onChange={handleChange}
            >
              <FormControlLabel value={true} control={<Radio />} label="Yes" />
              <FormControlLabel value={false} control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
          <TextField
            margin="normal"
            required
            fullWidth
            label="Pet Description"
            name="petDescription"
            value={formData.petDescription}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Owner Name"
            name="ownerName"
            value={formData.ownerName}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
          />
        </Box>
      </Container>
    </div>
  );
}

export default Register;
