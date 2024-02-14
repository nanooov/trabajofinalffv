
import './App.css';
import Home from './Screens/Home';
import Mujer from './Screens/Mujer';
import Hombre from './Screens/Hombre';
import Locales from './Screens/Locales';
import Contact from './Screens/Contact';
import NavBar from './Components/NavBar';


function App() {
  return (
    <div className="App">
     <NavBar/>
     <Home/>
     <Mujer/>
     <Hombre/>
     <Locales/>
     <Contact/>

    </div>
  );
}

export default App;
