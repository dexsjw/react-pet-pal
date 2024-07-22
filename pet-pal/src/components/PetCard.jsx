import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import {
  CakeOutlined,
  FmdGoodOutlined,
  Male,
  Female,
} from "@mui/icons-material";
import Typography from "@mui/material/Typography";

const PetCard = (props) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="picture of pet"
        height="345"
        image={props.imageSrc}
      />
      <CardContent>
        <Typography variant="h5">
          {props.name}
          {props.gender.toLowerCase() == "female" ? (
            <Female></Female>
          ) : (
            <Male></Male>
          )}
        </Typography>
        <Typography>
          <CakeOutlined></CakeOutlined>
          {props.age}
        </Typography>
        <Typography>
          <FmdGoodOutlined></FmdGoodOutlined>
          {props.location}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PetCard;
