import './App.css';
import Login from './components/loginPage';
import Signup from './components/signup';
function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <div class="container mx-auto">
      <Login></Login>
      <Signup></Signup>
    </div>
    </div>
  );
}

export default App;
