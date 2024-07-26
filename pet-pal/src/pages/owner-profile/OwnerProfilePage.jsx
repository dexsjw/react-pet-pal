// src/pages/owner-profile/OwnerProfile.jsx
import React, { useState, useEffect } from 'react';
import { Container, TextField, Button, Typography, Box, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, MenuItem, Select } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import  useOwnerContext  from '../../contexts/useOwnerContext';
import { getOwnerProfile, editOwnerProfile, deleteOwnerProfile } from '../../service/PetPalService';

function OwnerProfilePage() {
  const { ownerState, setOwnerState } = useOwnerContext();
  const [formData, setFormData] = useState({
    petName: ownerState.petName,
    areaLocation: ownerState.areaLocation,
    petGender: ownerState.petGender,
    petBreed: ownerState.petBreed,
    petAge: ownerState.petAge,
    petSize: ownerState.petSize,
    petIsNeutered: ownerState.petIsNeutered,
    petDescription: ownerState.petDescription,
    ownerName: ownerState.ownerName,
    email: ownerState.email,
    password: '',
    petPicture: ownerState.petPicture
  });

  const [photoPreview, setPhotoPreview] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOwnerProfile = async () => {
      try {
        
        const profile = await getOwnerProfile();
        console.dir(profile.owner);
        setFormData({petName: profile.owner.petName,
            areaLocation: profile.owner.areaLocation,
            petGender: profile.owner.petGender,
            petBreed: profile.owner.petBreed,
            petAge: profile.owner.petAge,
            petSize: profile.owner.petSize,
            petIsNeutered: profile.owner.petIsNeutered,
            petDescription: profile.owner.petDescription,
            ownerName: profile.owner.ownerName,
            email: profile.owner.email,
            password: profile.owner.password,
            petPicture: profile.owner.petPicture});
        setPhotoPreview(profile.owner.petPicture);
      } catch (error) {
        console.error('Error fetching owner profile:', error);
      }
    };

    fetchOwnerProfile();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData(prevState => ({ ...prevState, petPicture: reader.result }));
      setPhotoPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedProfile = await editOwnerProfile(formData);
      console.dir(updatedProfile);
      alert('Profile updated successfully');
      setOwnerState(updatedProfile.owner);
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('An error occurred while updating the profile.');
    }
  };

  const handleDelete = async () => {
    const confirmDelete = window.confirm('Are you sure you want to delete your profile? This action cannot be undone.');
    if (confirmDelete) {
      try {
        await deleteOwnerProfile(formData.password);
        alert('Profile deleted successfully');
        navigate('/');
      } catch (error) {
        console.error('Error deleting profile:', error);
        alert('An error occurred while deleting the profile.');
      }
    }
  };

  const buttonStyle = { width: '260px', mb: 2 };

  return (
    <Container maxWidth="md">
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 3 }}>
        <Box sx={{ width: '300px', height: '300px', border: '1px solid #ccc', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          {photoPreview ? <img src={photoPreview} alt="Pet" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : <Typography variant="body1">Pet Photo</Typography>}
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
          <Button
            variant="contained"
            component="label"
            sx={buttonStyle}
          >
            Upload Pet Photo
            <input
              type="file"
              hidden
              onChange={handleFileChange}
            />
          </Button>
          <Button type="submit" variant="contained" color="primary" onClick={handleSubmit} sx={buttonStyle}>
            Save
          </Button>
          <Button variant="outlined" color="secondary" onClick={() => navigate('/')} sx={buttonStyle}>
            Cancel
          </Button>
          <Button variant="contained" color="error" onClick={handleDelete} sx={buttonStyle}>
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
          name="areaLocation"
          value={formData.areaLocation}
          onChange={handleChange}
        />
        <FormControl component="fieldset" sx={{ mt: 2 }}>
          <FormLabel component="legend">Pet Gender</FormLabel>
          <RadioGroup row name="petGender" value={formData.petGender} onChange={handleChange}>
            <FormControlLabel value="Male" control={<Radio />} label="Male" />
            <FormControlLabel value="Female" control={<Radio />} label="Female" />
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
          <Select name="petSize" value={formData.petSize} onChange={handleChange}>
            <MenuItem value="Small">Small</MenuItem>
            <MenuItem value="Medium">Medium</MenuItem>
            <MenuItem value="Large">Large</MenuItem>
          </Select>
        </FormControl>
        <FormControl component="fieldset" sx={{ mt: 2 }}>
          <FormLabel component="legend">Pet Neutered</FormLabel>
          <RadioGroup row name="petIsNeutered" value={formData.petIsNeutered} onChange={handleChange}>
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
  );
}

export default OwnerProfilePage;
