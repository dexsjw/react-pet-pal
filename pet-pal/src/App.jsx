import ViewPetProfile from "./pages/ViewPet/ViewPetProfile";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Navbar from "./layout/Navbar";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Outlet />}>
          <Route path="/login" element={<>Login</>} />
          <Route path="/register" element={<>Register</>} />
          <Route element={<Navbar />}>
            <Route path="/profile/:id" element={<div>Own Profile Page</div>} />
            <Route path="/view-pet" element={<div>View Pet Page</div>} />
            <Route path="/view-pet/:id" element={<ViewPetProfile />} />
            <Route path="/chat" element={<div>Chat Page</div>} />
          </Route>
        </Route>
      </>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
