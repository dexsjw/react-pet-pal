import JasminePetCard from "../../common/components/JasminePetCard";
import Grid from "@mui/material/Grid";
// import petPalMockApi from "../../service/api/PetPalApi";
import { viewPet } from "../../service/PetPalService";
import { useEffect, useState } from "react";

import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const ViewPetPage = () => {
  const [ownersState, setOwnersState] = useState([]);

  // petPalMockApi.get("/owner-profile").then((response) => {
  //   setMockData(response.data);
  // });

  async function getViewPet() {
    const payload = await viewPet();
    setOwnersState(payload.owners);
  }

  useEffect(() => {
    getViewPet();
  }, []);

  if (!ownersState.length > 0) {
    return (
      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress size={"6rem"} />
      </Box>
    );
  }

  return (
    <Grid
      container
      rowSpacing={10}
      columnSpacing={{ xs: 10, sm: 10, md: 10 }}
      columns={2}
      padding={8}
      justifyContent="center"
      alignItems="center"
    >
      {ownersState.map((ownerState) => (
        <Grid item key={ownerState.ownerId}>
          <JasminePetCard
            id={ownerState.ownerId}
            name={ownerState.petName}
            gender={ownerState.petGender}
            age={ownerState.petAge}
            location={ownerState.areaLocation}
            imageSrc={ownerState.petPicture[0]}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default ViewPetPage;
