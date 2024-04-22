import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import ResponsiveCarousel from "./components/pages/corusal";
import Home from "./components/pages/home";
import Footer from "./components/pages/common/footer";
import LogIn from "./components/pages/LogInPage";
import Signup from "./components/pages/SignUpPage";
import Editor from "./components/editing/editor";
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
    element: <Editor />,
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
