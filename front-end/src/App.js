
import './App.css';
import Navigation from './Compornent/Customer/Navigation'
import Footer from './Compornent/Footer/Footer';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <div className="App">
<Navigation/>
      <div>
      <HomePage/>
      </div>
    
 
<Footer/>
    </div>
  );
}

export default App;
