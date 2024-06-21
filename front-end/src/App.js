
import './App.css';
import Cart from './Compornent/Cart/Cart';
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
      {/* <ProductDetails/> */}
      <Cart/>
      </div>
    
 
<Footer/>
    </div>
  );
}

export default App;
