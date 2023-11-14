import './Product.css';
import './AddCartBtn';
import React from 'react'
import AddCartBtn from './AddCartBtn';
import Discount from './Discount';

const Product = (props) => {
  return (
    <div className='product'>
      <h2>AQUI VAN LOS PRODUCTOS INDIVIDUALES</h2>
      <h2>desde Products.js</h2>
      <Discount discount={props.discount}/>
      <img className='product__img'  src="https://picsum.photos/180" alt="imagen producto" />
      <h2 className='product__name'>{props.name}</h2>
      <div className='product__details'>
          <p className='product__oldPrice'>${props.oldPrice}</p>
          <p className='product__price'>${props.newPrice}</p>
          <AddCartBtn/>
      </div>
    </div>
  )
}

export default Product
