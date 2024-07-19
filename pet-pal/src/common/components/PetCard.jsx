import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import {
  CakeSVG,
  LocationPinSVG,
  MaleiconSVG,
  FemaleiconSVG,
} from "../svgs/SVGs";

import Typography from "@mui/material/Typography";

// cardDetails props: img, petName, description, petGender, location, petAge
// fullPicture boolean true/false, if true put a big picture, if false use default
const PetCard = ({
  img,
  petName,
  description,
  petGender,
  location,
  petAge,
  fullPicture = false,
}) => {
  let height = 140;
  let width = 345;
  if (fullPicture === true) {
    height = 400;
    width = 550;
  }

  return (
    <Card sx={{ minWidth: width }}>
      <CardMedia sx={{ height: height }} image={img} title={petName} />
      <CardContent>
        <h2
          style={{
            fontSize: "1.5rem",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            color: "#6B6B6B",
          }}
        >
          {petName} {petGender === "Male" ? <MaleiconSVG /> : <FemaleiconSVG />}
        </h2>
        <Typography
          variant="body2"
          color="text.secondary"
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "3rem",
            alignItems: "center",
          }}
        >
          <span style={{ display: "flex", flexDirection: "row" }}>
            <LocationPinSVG />
            {location}
          </span>
          <span style={{ display: "flex", flexDirection: "row" }}>
            <CakeSVG />
            {petAge} years old
          </span>
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          style={{ margin: "1rem 0 0 0" }}
        >
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" size="large" style={{width: "100%"}}>
          Meet {petName}
        </Button>
      </CardActions>
    </Card>
  );
};

export default PetCard;
