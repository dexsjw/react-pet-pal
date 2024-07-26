import {
  ChatPage,
  LoginPage,
  RegisterPage,
  OwnerProfilePage,
  ViewPetPage,
  ViewPetProfilePage,
} from "./pages/Pages";
import ErrorPage from "./pages/error/ErrorPage";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import Navbar from "./layout/Navbar";
import { OwnerProvider } from "./contexts/OwnerContext";
import PageNotFound from "./pages/error/PageNotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Outlet />}>
          <Route
            // path="/login"
            index
            errorElement={<ErrorPage />}
            element={<LoginPage />}
          />
          <Route
            path="/register"
            errorElement={<ErrorPage />}
            element={<RegisterPage />}
          />
          <Route element={<Navbar />}>
            <Route
              path="/profile/:id"
              errorElement={<ErrorPage />}
              element={<OwnerProfilePage />}
            />
            <Route
              path="/view-pet"
              errorElement={<ErrorPage />}
              element={<ViewPetPage />}
            />
            <Route
              path="/view-pet/:ownerId"
              errorElement={<ErrorPage />}
              element={<ViewPetProfilePage />}
            />
            <Route
              path="/chat"
              errorElement={<ErrorPage />}
              element={<ChatPage />}
            />
          </Route>
          <Route
            path="*"
            errorElement={<ErrorPage />}
            element={<PageNotFound />}
          />
        </Route>
      </>
    )
  );

  return (
    <>
      <OwnerProvider>
        <RouterProvider router={router} />
      </OwnerProvider>
      <ToastContainer />
    </>
  );
}

export default App;
