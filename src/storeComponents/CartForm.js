import React from 'react'
import {v4 as uuidv4} from "uuid";
import CartBtn from './CartBtn'
import CartBtnIcon from './CartBtnIcon'
import CartNewBlankSpace from './CartNewBlankSpace';

const CartForm = (props) => {

    const handleFormMessage = () => {
      setTimeout(()=>{
        props.dispatchMethod({
          type: 'form-message'
        })
      }, 6000)
    }

    const handleFormButtonAnimation = () => {
      setTimeout(()=>{
        props.dispatchMethod({
          type: 'form-btn-animate'
        })
      }, 1500)
    }

    const handleSubmitForm = (e) => {
      e.preventDefault()
      let keyWord = e.target.product.value;
      let productItem = {
          id: uuidv4(),
          name: e.target.product.value,
          description: e.target.description.value,
          price: e.target.price.value,
          pic: `https://source.unsplash.com/random/1000x1000/?${keyWord.split(' ')[1]},${keyWord.split(' ')[0]}`,
          addedToCart: false,
      }
      props.dispatchMethod({
          type: 'add-item',
          payload: productItem
      })
      e.target.product.value = '';
      e.target.description.value = '';
      e.target.price.value = '';
      handleFormButtonAnimation();
      handleFormMessage();
  };


  return (

    <form onSubmit={handleSubmitForm} className='mt-5 mb-3' autoComplete='off'>
        <div className="form-floating">
          <input name='product' type="text" className='form-control mb-3' id='productName' placeholder='Enter name..' autoComplete='off' required />
          <label htmlFor="productName" className='form-label text-secondary'>Product Name:</label>
        </div>
        
        <div className="form-floating">
          <textarea name="description" id="productDescription" style={{height: '125px'}} maxLength="150" className='form-control mb-3' placeholder='Enter Description...' autoComplete='off' required ></textarea>
          <label htmlFor="productDescription" className='form-label text-secondary'>Description:</label>
        </div>

        <div className="form-floating">
          <input name='price' type="number" step="0.01" min="0" className='form-control mb-3' id='productPrice' placeholder='Enter Price...' autoComplete='off' required/>
          <label htmlFor="productPrice" className='form-label text-secondary'>Price:</label>
        </div>

        <div className='text-end'>
          <CartBtn 
            btnType={'submit'} 
            btnClass={
              props.mainState.formButtonAnimate ? 
                'btn mt-3 formBtnAnimation'
               : 
                'btn btn-warning mt-3'
              } 
            mainText={'Submit'}
            btnIconClass='bi bi-cloud-arrow-up fs-5'
            />
        </div>
        
          
    </form>

  )
}

export default CartForm