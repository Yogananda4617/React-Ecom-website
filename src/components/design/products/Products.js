import React, { useState } from 'react';

import "./Products.css";

const Products = ({productItems, handleAddProduct}) => {
    const[prddata,setPrddata] = useState(productItems)

    const filterResult =(catItem) =>{
        const result = productItems.filter((curData) =>{
            return curData.category === catItem;
        })
        setPrddata(result);
    }

  return (
    <div className='products-home'>
    <div className='filter'>
        <button onClick={() => filterResult('mens')}>Mens</button>
        <button onClick={() => filterResult('womens')}>Womens</button>
        <button onClick={() => filterResult('childerns')}>childerns</button>
        <button onClick={() => filterResult('footwear')}>footwear</button>
        <button onClick={() => setPrddata(productItems)}>All</button>

    </div>
    <div className='products'>
        {prddata.map((productItem) =>(
            <div className='card'>
                <div>
                    <img className='product-image' src={productItem.image} alt={productItem.name}></img>
                </div>
                <div>
                    <h3 className='product-name'>{productItem.name}</h3>
                </div>
                <div className='product-price'>
                    Rs.{productItem.price}
                </div>
                <div>
                    <button className='product-add-button' onClick={() => handleAddProduct(productItem)}>Add to Cart</button>
                </div>
            </div>
        ))}
    </div>
    </div>
  )
}

export default Products