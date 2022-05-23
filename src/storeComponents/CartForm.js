import React from 'react'
import {v4 as uuidv4} from "uuid";
import CartBtn from './CartBtn'
import CartBtnIcon from './CartBtnIcon'
import CartNewBlankSpace from './CartNewBlankSpace';

const CartForm = (props) => {

    const handleSubmitForm = (e) => {
      e.preventDefault()
      let keyWord = e.target.product.value;
      let productItem = {
          id: uuidv4(),
          name: e.target.product.value,
          description: e.target.description.value,
          price: e.target.price.value,
          pic: `https://source.unsplash.com/random/300x300/?${keyWord.split(' ')[1]},${keyWord.split(' ')[0]}`,
          addedToCart: false,
      }
      props.dispatchMethod({
          type: 'add-item',
          payload: productItem
      })
      e.target.product.value = '';
      e.target.description.value = '';
      e.target.price.value = '';
  };


  return (

    <form onSubmit={handleSubmitForm} className='mt-5 mb-3'>
        <label htmlFor="productName" className='form-label'>Product Name:</label>
        <input name='product' type="text" className='form-control mb-3' id='productName' required/>

        <label htmlFor="productName" className='form-label'>Description:</label>
        <textarea name="description" id="" cols="30" rows="4" className='form-control mb-3' required></textarea>

        <label htmlFor="productName" className='form-label'>Price:</label>
        <input name='price' type="number" step="0.01" min="0" className='form-control mb-3' id='productName' required/>

        <CartBtn 
          btnType={'submit'} 
          btnClass={'btn btn-success mt-3'} 
          btnIcon={<CartBtnIcon 
          iconTagClassName={'bi bi-cloud-arrow-up'}/>}  
          mainText={'Upoad'}
          newBlankSpace={<CartNewBlankSpace />}/>
          
    </form>

  )
}

export default CartForm