import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <div
      role="alert"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1 style={{ color: "#FF0000", fontSize: "5rem" }}>404 Page Not Found</h1>
      <button
        style={{ padding: "1rem 2rem" }}
        onClick={() => navigate(-1)}
      >
        Go back
      </button>
    </div>
  );
};

export default PageNotFound;
