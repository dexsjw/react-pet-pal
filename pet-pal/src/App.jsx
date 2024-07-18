import {
  ChatPage,
  LoginPage,
  RegisterPage,
  OwnerProfilePage,
  ViewPetPage,
  ViewPetProfilePage,
} from "./pages/Pages";
import EBoundary from "./pages/error/EBoundary";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Navbar from "./layout/Navbar";
import { OwnerProvider } from "./contexts/OwnerContext";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Outlet />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route element={<Navbar />}>
            <Route path="/profile/:id" element={<OwnerProfilePage />} />
            <Route path="/view-pet" element={<ViewPetPage />} />
            <Route path="/view-pet/:id" element={<ViewPetProfilePage />} />
            <Route path="/chat" element={<ChatPage />} />
          </Route>
        </Route>
      </>
    )
  );

  return (
    <>
      <EBoundary>
        <OwnerProvider>
          <RouterProvider router={router} />
        </OwnerProvider>
      </EBoundary>
    </>
  );
}

export default App;
