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
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
