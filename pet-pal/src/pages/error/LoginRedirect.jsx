import { useNavigate, Outlet } from "react-router-dom";
import { useEffect } from "react";
import { JWT_TOKEN } from "../../service/PetPalService";

const LoginRedirect = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem(JWT_TOKEN) ? true : false; 

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login", { replace: true });
    }
  }, []);

  return <Outlet />;
};
// Would like to find a way to inform the login page, to display a notification telling the user they need to be logged in?
// Maybe a cover page on / route.

export default LoginRedirect;
