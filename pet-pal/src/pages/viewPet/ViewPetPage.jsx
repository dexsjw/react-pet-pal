import JasminePetCard from "../../common/components/JasminePetCard";
import Grid from "@mui/material/Grid";
// import petPalMockApi from "../../service/api/PetPalApi";
import { viewPet } from "../../service/PetPalService";
import { useEffect, useState } from "react";

const ViewPetPage = () => {
  const [ownersState, setOwnersState] = useState([]);

  // petPalMockApi.get("/owner-profile").then((response) => {
  //   setMockData(response.data);
  // });
  setOwnersState;

  useEffect(() => {
    async () => setOwnersState(await viewPet());
    console.log("ownersState", ownersState);
  }, []);

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
            imageSrc={
              "https://images.dog.ceo/breeds/schipperke/n02104365_67.jpg"
            }
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default ViewPetPage;
