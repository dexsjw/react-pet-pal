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
import { useNavigate } from "react-router-dom";

const JasminePetCard = (props) => {
  let width = 500;
  let imageWidth = "345";

  let isViewPetProfile = Boolean(props.description);

  if (isViewPetProfile) {
    width = "720";
    imageWidth = "600";
  }

  const navigate = useNavigate();
  return (
    <Card sx={{ width }}>
      <CardActionArea
        onClick={() => {
          // if (document.location.href.endsWith("/")) {
          //   document.location.href = document.location.href + props.id;
          // } else {
          //   document.location.href = document.location.href + "/" + props.id;
          // }
          if (!isViewPetProfile) {
            navigate(`/view-pet/${props.id}`);
          }
        }}
      >
        <CardMedia
          component="img"
          alt="picture of pet"
          weight={imageWidth}
          height={imageWidth}
          image={props.imageSrc}
        />
        <CardContent>
          <Box display="flex" alignItems="center" mb={2}>
            <Typography variant="h5">{props.name}</Typography>
            <Typography variant="h5">
              {props.gender.toLowerCase() == "female" ? (
                <Female />
              ) : (
                <Male />
              )}
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" >
            <CakeOutlined></CakeOutlined>
            <Typography mr={1}>{props.age}</Typography>
            <FmdGoodOutlined></FmdGoodOutlined>
            <Typography>{props.location}</Typography>
          </Box>
          {props.description ? (
            <Typography mt={1}>{props.description}</Typography>
          ) : (
            <></>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default JasminePetCard;
