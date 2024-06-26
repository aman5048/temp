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
import OrderSuccessPage from "./components/pages/OrderSuccessPage";
// import UserOrders from "./components/user/userOrders";
import UserOrdersPage from "./components/pages/userOrderPage";
import { fetchLoggedInUserAsync } from "./components/user/userSlice";
import UserProfilePage from "./components/pages/userProfilePage";
import ForgotPasswordPage from "./components/pages/ForgotPasswordPage";
import Logout from "./components/pages/auth/LogOut";
import ProtectedAdimin from "./components/pages/auth/ProtectedAdmin";
import AdminHome from "./components/pages/AdminHome";
import AdminProductDetailPage from "./components/pages/AdminProductDetailPage";
import AdminProductFormPage from "./components/pages/AdminProductFormPage";
import AdminOrdersPage from "./components/pages/AdminOrdersPage";

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
    path: "*",
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
  {
    path: "/order-success/:id",
    element: <OrderSuccessPage></OrderSuccessPage>,
  },
  {
    path: "/orders",
    element: (
      <Protected>
        <UserOrdersPage />
      </Protected>
      // we will add Page later right now using component directly.
    ),
  },
  {
    path: "/profile",
    element: (
      <Protected>
        <UserProfilePage />
      </Protected>
    ),
  },
  {
    path: "/forgot-password",
    element: <ForgotPasswordPage />,
  },
  {
    path: "/logout",
    element: <Logout />,
  },
  {
    path: "/admin",
    element: (
      <ProtectedAdimin>
        <AdminHome></AdminHome>
      </ProtectedAdimin>
    ),
  },
  {
    path: "/admin/product-detail/:id",
    element: (
      <ProtectedAdimin>
        <AdminProductDetailPage></AdminProductDetailPage>
      </ProtectedAdimin>
    ),
  },
  {
    path: "/admin/product-form",
    element: (
      <ProtectedAdimin>
        <AdminProductFormPage></AdminProductFormPage>
      </ProtectedAdimin>
    ),
  },
  {
    path: "/admin/product-form/edit/:id",
    element: (
      <ProtectedAdimin>
        <AdminProductFormPage></AdminProductFormPage>
      </ProtectedAdimin>
    ),
  },
  {
    path: "/admin/orders",
    element: (
      <ProtectedAdimin>
        <AdminOrdersPage></AdminOrdersPage>
      </ProtectedAdimin>
    ),
  },
]);

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);

  useEffect(() => {
    if (user) {
      dispatch(fetchItemsByUserIdAsync(user.id));
      dispatch(fetchLoggedInUserAsync(user.id));
    }
  }, [dispatch, user]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
