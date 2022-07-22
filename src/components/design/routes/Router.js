import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Cart from '../cart/Cart';
import Products from '../products/Products';
import SignUp from '../signup/SignUp';


const Routes = ({productItems, cartItems , handleAddProduct,handleRemoveProduct,handleCartClearance}) => {
  return (
    <div>
        <Switch>
            <Route path='/' exact >
                <Products productItems={productItems} handleAddProduct={handleAddProduct}/>
            </Route>
            
            <Route path='/signup' exact>
                <SignUp/>
            </Route>
            <Route path='/cart'>
                <Cart cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} handleCartClearance={handleCartClearance}/>
            </Route>
        </Switch>
    </div>
  )
}

export default Routes;