import logo from './logo.svg';
import './App.css';
import Login from './components/loginPage';
function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <div class="container mx-auto">
      <Login></Login>
    </div>
    </div>
  );
}

export default App;
