import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import Cart from '../Compornent/Cart/Cart'
import Navigation from '../Compornent/Customer/Navigation'
import Footer from '../Compornent/Footer/Footer'
import Product from '../Compornent/Product/Product'

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

      {/* <Product/> */}
      {/* <ProductDetails/> */}
      {/* <Cart/> */}

      {/* <Checkout/> */}
      {/* <Order/> */}
      {/* <OrderDetail/> */}

        </Routes>

        <div>
             
         <Footer/>
        </div>
      
    </div>
  )
}
