
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './Compornent/Cart/Cart';
import Checkout from './Compornent/Checkout/Checkout';
import Navigation from './Compornent/Customer/Navigation'
import Footer from './Compornent/Footer/Footer';
import Order from './Compornent/Order/Order';
import OrderDetail from './Compornent/Order/OrderDetail';
import Product from './Compornent/Product/Product';
import ProductDetails from './Compornent/ProductDetails/ProductDetails';
import HomePage from './Pages/HomePage';
import CustomerRouters from './Routers/CustomerRouters';

function App() {
  return (
    <div className="App">

      <Routes>

        <Route path='/*' element={<CustomerRouters/>}></Route>

      </Routes>

      <div>
   
      </div>
    

    </div>
  );
}

export default App;
