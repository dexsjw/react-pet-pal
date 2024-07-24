import { useNavigate, Outlet } from "react-router-dom";
import { useEffect } from "react";

const LoginRedirect = () => {
  const navigate = useNavigate();
  const loggedInUserEmail = localStorage.getItem("loggedInUser");

  useEffect(() => {
    if (loggedInUserEmail === null) {
      navigate("/login", { replace: true });
    } else {
      navigate("/profile/123", { replace: true }); // Temp id of 123, should this just be /profile ? Else profile ID should be saved too
    }
  }, [loggedInUserEmail]);

  return <Outlet />;
};
// Would like to find a way to inform the login page, to display a notification telling the user they need to be logged in?
// Maybe a cover page on / route.

export default LoginRedirect;
