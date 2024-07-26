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
  Route,
  RouterProvider,
} from "react-router-dom";
import Navbar from "./layout/Navbar";
import { OwnerProvider } from "./contexts/OwnerContext";
import PageNotFound from "./pages/error/PageNotFound";
import LoginRedirect from "./pages/error/LoginRedirect";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<LoginRedirect />}>
          <Route
            path="/login"
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
              path="/view-pet/:id"
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
    </>
  );
}

export default App;
