import React from 'react';
import "./cart.css";
import GooglePayButton from '@google-pay/button-react';

const Cart = ({cartItems,handleAddProduct,handleRemoveProduct,handleCartClearance}) => {

    const totalPrice = cartItems.reduce((price,item) => price + item.quantity * item.price, 0)
  return (
    <div className='cart-items'>
        <h1 className='cart-items-header'>Cart Items</h1>
        <div className='clear-cart'>
            { cartItems.length >=1 && (
                <button className='clear-cart-button' onClick={handleCartClearance}>Clear Cart</button>
            )

            }

        </div>
        {cartItems.length === 0 && (
            <div className='cart-items-empty'> No items in Cart</div>
        )} 

        <div>
            {cartItems.map((item) => (
                <div key={item.id} className="cart-item-list">
                    <img className='cart-items-image' src={item.image} alt={item.name}/>
                    <div className='cart-items-name'>{item.name}</div>
                    <div className='cart-items-function'>
                        <button className='cart-items-add' onClick={()=>handleAddProduct(item)}>+</button>
                        <button className='cart-items-remove' onClick={()=>handleRemoveProduct(item)}>-</button>
                    </div>
                    <div className='cart-items-price'>
                        {item.quantity} * Rs.{item.price}
                    </div>
                </div>
            ))}
        </div>
        <div className='cart-items-total-price-name'>
            Total Price:    
                <div className='cart-items-total-price'>
                    Rs.{totalPrice}
                </div>

        </div>
        {totalPrice !== 0 ?
        
            <GooglePayButton
                className='googlePay'
                environment="TEST"
                buttonSizeMode="fill"
                paymentRequest ={{
                    apiVersion:2,
                    apiVersionMinor:0,
                    allowedPaymentMethods:[
                        {
                            type:'CARD',
                            parameters:{
                                allowedAuthMethods:['PAN_ONLY','CRYPTOGRAM_3DS'],
                                allowedCardNetworks:['MASTERCARD','VISA'],
                            },
                            tokenizationSpecification:{
                                type:'PAYMENT_GATEWAY',
                                parameters:{
                                    gateway:'example',
                                    gatewayMerchantId:'examplegatewayMerchantID',
                                },
                            },
                        },
                    ],
                    merchantInfo:{
                        merchantId:'17613812255336763067',
                        merchantName:"demo",
                    },
                    transactionInfo:{
                        totalPriceStatus:'FINAL',
                        totalPriceLabel:'Total',
                        totalPrice:{totalPrice},
                        currencyCode:'Rs',
                        countryCode:'Ind'
                    },
                }}
                onLoadPaymentData = { () => {
                    console.log("sucess");
                }}
            />
               : ""
        }
    </div>
  )
}

export default Cart