import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import Cart from '../Compornent/Cart/Cart'
import Navigation from '../Compornent/Customer/Navigation'
import Footer from '../Compornent/Footer/Footer'
import Product from '../Compornent/Product/Product'
import ProductDetails from '../Compornent/ProductDetails/ProductDetails'
import Checkout from '../Compornent/Checkout/Checkout'
import Order from '../Compornent/Order/Order'
import OrderDetail from '../Compornent/Order/OrderDetail'

export default function CustomerRouters() {
  return (
    <div>

        <div>
        <Navigation/>
        </div>

        <Routes>
            <Route path='/' element={<HomePage/>}> </Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/:lavelOne/:lavelTwo/:lavelThre' element={<Product/>}></Route>
            <Route path='/product/:productId' element={<ProductDetails/>}></Route>
            <Route path='/checkout' element={<Checkout/>}></Route>
            <Route path='/account/order' element={<Order/>}></Route>
            <Route path='/account/order/:orderId' element={<OrderDetail/>}></Route>

     
    
      {/* <Order/> */}
      {/* <OrderDetail/> */}

        </Routes>

        <div>
             
         <Footer/>
        </div>
      
    </div>
  )
}
