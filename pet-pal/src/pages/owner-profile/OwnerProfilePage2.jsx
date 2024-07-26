// src/pages/owner-profile/OwnerProfile.jsx
import React, { useState, useEffect } from "react";
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
import useOwnerContext from "../../contexts/useOwnerContext";

function OwnerProfile() {
  const { state, dispatch } = useOwnerContext();
  const [formData, setFormData] = useState({
    petName: "",
    location: "",
    gender: "",
    breed: "",
    age: "",
    size: "",
    neutered: "",
    description: "",
    ownerName: "",
    email: "",
    password: "",
    petPhoto: "",
  });

  const [photoPreview, setPhotoPreview] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUserEmail = localStorage.getItem("loggedInUser");
    const userData = state.users.find(
      (user) => user.email === loggedInUserEmail
    );
    if (userData) {
      setFormData(userData);
      setPhotoPreview(userData.petPhoto);
    }
  }, [state.users]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData((prevState) => ({ ...prevState, petPhoto: reader.result }));
      setPhotoPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedUsers = state.users.map((user) =>
      user.email === formData.email ? formData : user
    );
    dispatch({ type: "UPDATE_USER", payload: formData });
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    alert("Profile updated successfully");
  };

  const handleDelete = () => {
    dispatch({ type: "DELETE_USER", payload: formData.email });
    const updatedUsers = state.users.filter(
      (user) => user.email !== formData.email
    );
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    console.log(localStorage);
    alert("Profile deleted successfully");
    navigate("/");
  };

  const buttonStyle = { width: "260px", mb: 2 }; // Consistent button style

  return (
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
          <Button variant="contained" component="label" sx={buttonStyle}>
            Upload Pet Photo
            <input type="file" hidden onChange={handleFileChange} />
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            sx={buttonStyle}
          >
            Save
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => navigate("/")}
            sx={buttonStyle}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={handleDelete}
            sx={buttonStyle}
          >
            Delete
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
          name="location"
          value={formData.location}
          onChange={handleChange}
        />
        <FormControl component="fieldset" sx={{ mt: 2 }}>
          <FormLabel component="legend">Pet Gender</FormLabel>
          <RadioGroup
            row
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel
              value="female"
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
          name="breed"
          value={formData.breed}
          onChange={handleChange}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          label="Pet Age"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
        <FormControl fullWidth sx={{ mt: 2 }}>
          <FormLabel component="legend">Pet Size</FormLabel>
          <Select name="size" value={formData.size} onChange={handleChange}>
            <MenuItem value="small">Small</MenuItem>
            <MenuItem value="medium">Medium</MenuItem>
            <MenuItem value="large">Large</MenuItem>
          </Select>
        </FormControl>
        <FormControl component="fieldset" sx={{ mt: 2 }}>
          <FormLabel component="legend">Pet Neutered</FormLabel>
          <RadioGroup
            row
            name="neutered"
            value={formData.neutered}
            onChange={handleChange}
          >
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
        <TextField
          margin="normal"
          required
          fullWidth
          label="Pet Description"
          name="description"
          value={formData.description}
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
  );
}

export default OwnerProfile;
