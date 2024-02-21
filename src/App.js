import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from 'react-router-dom';
import Login from './components/loginPage';
import Signup from './components/signup';
import ResponsiveCarousel from './components/corusal';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Signup />,
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
