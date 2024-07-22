import PetCard from "../../components/PetCard";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";

const ViewPetPage = () => {
  const mockData = [
    {
      areaLocation: "Bishan", // string (e.g. Bishan, Changi, Orchard),
      petPicture: "https://images.dog.ceo/breeds/schipperke/n02104365_67.jpg", // url string (generate random url string -> own photo if have time)
      petName: "Winnie", // string
      petGender: "Male?", // male / female,
      petAge: 8, // number
    },
    {
      areaLocation: "Bishan", // string (e.g. Bishan, Changi, Orchard),
      petPicture: "https://images.dog.ceo/breeds/schipperke/n02104365_67.jpg", // url string (generate random url string -> own photo if have time)
      petName: "Winnie", // string
      petGender: "Male?", // male / female,
      petAge: 8, // number
    },
    {
      areaLocation: "Bishan", // string (e.g. Bishan, Changi, Orchard),
      petPicture: "https://images.dog.ceo/breeds/schipperke/n02104365_67.jpg", // url string (generate random url string -> own photo if have time)
      petName: "Winnie", // string
      petGender: "Male?", // male / female,
      petAge: 8, // number
    },
    {
      areaLocation: "Bishan", // string (e.g. Bishan, Changi, Orchard),
      petPicture: "https://images.dog.ceo/breeds/schipperke/n02104365_67.jpg", // url string (generate random url string -> own photo if have time)
      petName: "Winnie", // string
      petGender: "Male?", // male / female,
      petAge: 8, // number
    },
    {
      areaLocation: "Bishan", // string (e.g. Bishan, Changi, Orchard),
      petPicture: "https://images.dog.ceo/breeds/schipperke/n02104365_67.jpg", // url string (generate random url string -> own photo if have time)
      petName: "Winnie", // string
      petGender: "Male?", // male / female,
      petAge: 8, // number
    },
    {
      areaLocation: "Bishan", // string (e.g. Bishan, Changi, Orchard),
      petPicture: "https://images.dog.ceo/breeds/schipperke/n02104365_67.jpg", // url string (generate random url string -> own photo if have time)
      petName: "Winnie", // string
      petGender: "Male?", // male / female,
      petAge: 8, // number
    },
  ];
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {mockData.map((data) => (
        <Grid item xs={6}>
          <PetCard
            name={data.petName}
            gender={data.petGender}
            age={data.petAge}
            location={data.areaLocation}
            imageSrc={data.petPicture}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default ViewPetPage;
