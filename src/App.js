import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import LogIn from "./components/pages/loginPage";
import Home from "./components/pages/home";
import Signup from "./components/pages/SignUpPage";
import EditingPage from "./components/pages/editingPage";
import MainPage from "./components/pages/mainPage";
import CartPage from "./components/pages/cartPage";
import Checkout from "./components/pages/checkout";
import ProductDetailPage from "./components/pages/prodductdetailPage";

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
    element: <EditingPage />,
  },
  {
    path: "/mainpage",
    element: <MainPage />,
  },
  {
    path: "/cartpage",
    element: <CartPage />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "/products/:id",
    element: <ProductDetailPage />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
