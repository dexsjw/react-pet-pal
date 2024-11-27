// src/pages/owner-profile/OwnerProfile.jsx
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
import useOwnerContext from "../../contexts/useOwnerContext";
import {
  getOwnerProfile,
  editOwnerProfile,
  deleteOwnerProfile,
} from "../../service/PetPalService";
import { toast } from "react-toastify";

function OwnerProfilePage() {
  const { setOwnerState } = useOwnerContext();
  const [formData, setFormData] = useState({
    ownerId: 0,
    petName: "",
    areaLocation: "",
    petGender: "",
    petBreed: "",
    petAge: 0,
    petSize: "",
    petIsNeutered: false,
    petDescription: "",
    ownerName: "",
    email: "",
    oldPassword: "",
    newPassword: "",
    petPicture: [],
  });

  const [photoPreview, setPhotoPreview] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOwnerProfile = async () => {
      try {
        const profile = await getOwnerProfile();
        setFormData(profile.owner);
        setPhotoPreview(profile.owner.petPicture);
      } catch (error) {
        console.error("Error fetching owner profile:", error);
      }
    };

    fetchOwnerProfile();
  }, []);

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
    const response = await editOwnerProfile(formData);
    if (response.error) {
      toast.error(response.status);
    } else {
      toast.success("Profile updated successfully");
      setOwnerState(response.owner);
    }
  };

  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete your account? This action cannot be undone."
    );
    if (confirmDelete) {
      const password = window.prompt(
        "Enter your current password to delete your account."
      );
      if (password) {
        try {
          await deleteOwnerProfile(password);
          alert("Account deleted successfully");
          navigate("/");
        } catch (error) {
          console.error("Error deleting profile:", error);
          toast.error("An error occurred while deleting the profile.");
        }
      }
    }
  };

  const buttonStyle = { width: "260px", mb: 2 };

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
            Upload New Pet Photo
            <input type="file" hidden onChange={handleFileChange} />
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            sx={buttonStyle}
          >
            Save Changes
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={handleDelete}
            sx={buttonStyle}
          >
            Delete My Account
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
        <p style={{ margin: "1rem 0 0 0" }}>
          To change your password, fill in both old and new passwords.
        </p>
        <div style={{ display: "flex", flexDirection: "row", gap: "2rem" }}>
          <TextField
            margin="normal"
            fullWidth
            label="Old Password"
            name="oldPassword"
            type="password"
            value={formData.password}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            fullWidth
            label="New Password"
            name="newPassword"
            type="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
      </Box>
    </Container>
  );
}

export default OwnerProfilePage;
