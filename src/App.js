import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LogIn from "./components/pages/loginPage";
import Home from "./components/pages/home";
import Signup from "./components/pages/SignUpPage";
import EditingPage from "./components/pages/editingPage";
import MainPage from "./components/pages/mainPage";
import CartPage from "./components/pages/cartPage";
import Checkout from "./components/pages/checkout";
import ProductDetailPage from "./components/pages/prodductdetailPage";
import NotFound from "./components/pages/404errorPage";
import TermAndConditionPage from "./components/pages/termAndConditionPage";
import AboutUsPage from "./components/pages/aboutPage";
import Protected from "./components/pages/auth/protected";
import { selectLoggedInUser } from "./components/pages/auth/authSlice";
import { fetchItemsByUserIdAsync } from "./components/cart/cartSlice";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/login",
    element: <LogIn />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/editor",
    element: (
      <Protected>
        <EditingPage />
      </Protected>
    ),
  },
  {
    path: "/mainpage",
    element: (
      <Protected>
        <MainPage />
      </Protected>
    ),
  },
  {
    path: "/cartpage",
    element: (
      <Protected>
        <CartPage />
      </Protected>
    ),
  },
  {
    path: "/checkout",
    element: (
      <Protected>
        <Checkout />
      </Protected>
    ),
  },
  {
    path: "/products/:id",
    element: (
      <Protected>
        <ProductDetailPage />
      </Protected>
    ),
  },
  {
    path: "/aboutus",
    element: <AboutUsPage />,
  },
  {
    path: "/404",
    element: <NotFound />,
  },
  {
    path: "/termsAndCondition",
    element: <TermAndConditionPage />,
  },
  {
    path: "/checkout",
    element: (
      <Protected>
        <Checkout />
      </Protected>
    ),
  },
]);

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);

  useEffect(() => {
    if (user) {
      dispatch(fetchItemsByUserIdAsync(user.id));
    }
  }, [dispatch, user]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
