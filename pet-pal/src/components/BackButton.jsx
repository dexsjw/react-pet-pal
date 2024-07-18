import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();
  const navigateBack = () => {
    navigate(-1);
  };

  return (
    <button
      style={{
        border: "none",
        width: "2rem",
        backgroundColor: "rgba(0,0,0,0)",
      }}
      onClick={navigateBack}
    >
      ←Back
    </button>
  );
};

export default BackButton;
