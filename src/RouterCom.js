import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { BookDetails, bookIdLoader } from "./components/BookDetails";
import { SignUpLogin } from "./components/LogInSignUp/SignUpLogin";
import { Favorites, userLoader } from "./components/Protected/Favorites";
import { useAuth } from "./Context/AuthContext";
import { useNavigate } from "react-router-dom";

export const RouterCom = () => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/sign-up-login",
      element: <SignUpLogin />,
    },
    {
      path: "/favorites",
      element: <Favorites />,
      loader: userLoader,
    },
    {
      path: "/book-details/:bookId",
      element: <BookDetails />,
      loader: bookIdLoader,
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}
