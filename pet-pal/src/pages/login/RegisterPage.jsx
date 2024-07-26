// src/pages/register/Register.jsx
import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, MenuItem, Select } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { editOwnerProfile } from '../../service/PetPalService'; // Import your API function

function Register() {
  const [formData, setFormData] = useState({
    petName: '',
    location: '',
    gender: '',
    breed: '',
    age: '',
    size: '',
    neutered: '',
    description: '',
    ownerName: '',
    email: '',
    password: '',
    petPhoto: ''
  });

  const [photoPreview, setPhotoPreview] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData(prevState => ({ ...prevState, petPhoto: reader.result }));
      setPhotoPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await editOwnerProfile(formData);
    if (response.success) {
      alert('Profile registered successfully');
      navigate('/');
    } else {
      alert('Error registering profile');
    }
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        Register
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <Box sx={{ width: '300px', height: '300px', border: '1px solid #ccc', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          {photoPreview ? <img src={photoPreview} alt="Pet" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : <Typography variant="body1">Pet Photo</Typography>}
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
          <Button
            variant="contained"
            component="label"
            sx={{ mb: 2 }}
          >
            Upload Pet Photo
            <input
              type="file"
              hidden
              onChange={handleFileChange}
            />
          </Button>
          <Button type="submit" variant="contained" color="primary" onClick={handleSubmit} sx={{ mb: 2 }}>
            Register
          </Button>
          <Button variant="outlined" color="secondary" onClick={() => navigate('/')} sx={{ mb: 2 }}>
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
          name="location"
          value={formData.location}
          onChange={handleChange}
        />
        <FormControl component="fieldset" sx={{ mt: 2 }}>
          <FormLabel component="legend">Pet Gender</FormLabel>
          <RadioGroup row name="gender" value={formData.gender} onChange={handleChange}>
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="female" control={<Radio />} label="Female" />
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
          <RadioGroup row name="neutered" value={formData.neutered} onChange={handleChange}>
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
        <Button type="submit" fullWidth variant="contained" color="primary" sx={{ mt: 3, mb: 2 }}>
          Register
        </Button>
        <Button fullWidth variant="outlined" color="secondary" onClick={() => navigate('/')}>
          Cancel
        </Button>
      </Box>
    </Container>
  );
}

export default Register;
