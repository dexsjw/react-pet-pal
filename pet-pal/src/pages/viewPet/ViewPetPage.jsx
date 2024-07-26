import PetCard from "../../common/components/JasminePetCard";
import Grid from "@mui/material/Grid";
import petPalMockApi from "../../service/api/PetPalApi";
import { useState } from "react";

const ViewPetPage = () => {
  const [mockData, setMockData] = useState([]);

  petPalMockApi.get("/owner-profile").then((response) => {
    setMockData(response.data);
  });

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
      {mockData.map((data) => (
        <Grid item key={data.id}>
          <PetCard
            id={data.ownerId}
            name={data.petName}
            gender={data.petGender}
            age={data.petAge}
            location={data.areaLocation}
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
