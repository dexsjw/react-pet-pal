import { Outlet, useLocation, Navigate } from "react-router-dom";
import { Avatar, Box, Drawer, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
import useOwnerContext from "../contexts/useOwnerContext";
import { useEffect } from "react";
import { getOwnerProfile } from "../service/PetPalService";
import { JWT_TOKEN } from "../service/PetPalService";

const navLinkProps = [
  {text: "View Pets", path: "/view-pet", needOwnerId: false}, 
  {text: "My Profile", path: "/profile", needOwnerId: true},
  {text: "Chat", path: "/chat", needOwnerId: false}, 
  {text: "Logout", path: "/login", needOwnerId: false},
]

const Navbar = () => {
  useEffect(() => {
    setOwnerState(retrieveOwnerProfile());
  }, [])

  const {setOwnerState} = useOwnerContext();

  // Redirect to login if not logged in
  const location = useLocation();
  const isLoggedIn = localStorage.getItem(JWT_TOKEN) ? true : false;
  if (!isLoggedIn) {
    return <Navigate to="/" state={{ from: location }} />;
  }
  // const navigate = useNavigate();

  async function retrieveOwnerProfile() {
    const payload = await getOwnerProfile();
    return payload.owner;
  }

  return (
    <>
      <Drawer 
        variant="permanent"
        sx={{
          width: "18vw",
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: "18vw",
            boxSizing: 'border-box',
            backgroundColor: "#3063C3"
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mt: 8,
          }}
        >
          <Avatar 
            alt="Paw Icon"
            src="https://images.dog.ceo/breeds/collie-border/n02106166_59.jpg"
            // src='../../common/images/paw-icon.png'
            sx={{ width: 100, height: 100 }}
          />
          <Typography variant="h3">Pet Pal</Typography>
        </Box>
        {navLinkProps.map((navLinkProp, index) => (
          <List key={index}>
            <ListItem >
              <ListItemButton key={index}>
                <ListItemText 
                  primary={navLinkProp.text}
                  sx={{color: "#E8F0FF"}}
                  // onClick={navLinkProp.needOwnerId 
                  //   ? navigate(`${navLinkProp.path}/${ownerState.ownerId}`)
                  //   : navigate(navLinkProp.path)
                  // }
                />
              </ListItemButton>
            </ListItem>
          </List>
        ))}
      </Drawer>
      <Box
        sx={{ margin: "0 0 0 18vw", padding: "1rem 0 0 1rem" }}
      >
        <Outlet />
      </Box>
    </>
  );
};

export default Navbar;
