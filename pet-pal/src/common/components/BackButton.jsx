import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';

const BackButton = () => {
  const navigate = useNavigate();
  const navigateBack = () => {
    navigate(-1);
  };

  return (
    <Button
      style={{
        width: "fit-content"
        // border: "none",
        // width: "2rem",
        // backgroundColor: "rgba(0,0,0,0)",
      }}
      onClick={navigateBack}
      size="small"
    >
      ←Back
    </Button>
  );
};

export default BackButton;
