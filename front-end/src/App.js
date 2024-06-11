
import './App.css';
import Navigation from './Compornent/Customer/Navigation'
import Footer from './Compornent/Footer/Footer';
import Product from './Compornent/Product/Product';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <div className="App">
<Navigation/>
      <div>
      {/* <HomePage/> */}
      <Product/>
      </div>
    
 
<Footer/>
    </div>
  );
}

export default App;
