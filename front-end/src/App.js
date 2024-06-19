
import './App.css';
import Navigation from './Compornent/Customer/Navigation'
import Footer from './Compornent/Footer/Footer';
import Product from './Compornent/Product/Product';
import ProductDetails from './Compornent/ProductDetails/ProductDetails';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <div className="App">
<Navigation/>
      <div>
      {/* <HomePage/> */}
      {/* <Product/> */}
      <ProductDetails/>
      </div>
    
 
<Footer/>
    </div>
  );
}

export default App;
