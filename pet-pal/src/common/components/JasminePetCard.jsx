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
import Box from "@mui/material/Box";
import { CardActionArea } from "@mui/material";

const PetCard = (props) => {
  return (
    <Card sx={{ width: 500 }}>
      <CardActionArea
        onClick={() => {
          if (document.location.href.endsWith("/")) {
            document.location.href = document.location.href + props.id;
          } else {
            document.location.href = document.location.href + "/" + props.id;
          }
        }}
      >
        <CardMedia
          component="img"
          alt="picture of pet"
          height="345"
          image={props.imageSrc}
        />
        <CardContent>
          <Box display="flex" alignItems="center" mb={2}>
            <Typography variant="h5">{props.name}</Typography>
            <Typography variant="h5">
              {props.gender.toLowerCase() == "female" ? (
                <Female></Female>
              ) : (
                <Male></Male>
              )}
            </Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <CakeOutlined></CakeOutlined>
            <Typography mr={1}>{props.age}</Typography>
            <FmdGoodOutlined></FmdGoodOutlined>
            <Typography>{props.location}</Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default PetCard;
