import React from 'react'
import CartDetailsRow from './CartDetailsRow'
import CartDetailsTotal from './CartDetailsTotal'
import CartBtn from './CartBtn'
import CartBtnIcon from './CartBtnIcon'
import CartNewBlankSpace from './CartNewBlankSpace'


const CartDetails = (props) => {

  const handleEmptyCart = () => {
    console.log('you want to empty the cart, done!')
    props.dispatchMethod({
      type: 'empty-the-cart',
      payload: "dispatch function from empty cart btn was triggerrrrreddd!!"
    })
  }

  return (

    <tbody>
        {props.actualState.products.map(item => {
            if(item.addedToCart === true){
                return <CartDetailsRow
                         key={item.id} 
                         currentItem={item} 
                         actualStateTwo={props.actualState} 
                         addItem={props.addItemToCart} 
                         removeItem={props.removeItemFromCart}
                         dispatchMethod={props.dispatchMethod}/>
            }
        })}
        <tr className='text-center align-middle border-top border-bottom' style={{height: 60}}>
          <td className='text-center'>
              <CartBtn
                  btnType={'button'} 
                  btnClass={'btn btn-danger'} 
                  btnIcon={<CartBtnIcon iconTagClassName={'bi bi-trash'}/>} 
                  mainText={'Empty'} 
                  onClickFunc={handleEmptyCart}
                  newBlankSpace={<CartNewBlankSpace/>}/>
          </td>
          <td colSpan={2}>
              <h5 className='text-light text-end'>Total:</h5>
          </td>
          <td colSpan={2}>
              <CartDetailsTotal presentState={props.actualState}/>
          </td>
          
        </tr>
        
    </tbody>
  )
}

export default CartDetails

