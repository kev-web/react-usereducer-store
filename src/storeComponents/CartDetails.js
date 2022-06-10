import React from 'react'
import CartDetailsRow from './CartDetailsRow'
import CartDetailsSubtotal from './CartDetailsSubtotal'
import CartDetailsTax from './CartDetailsTax'
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

        <tr className='text-center align-middle border-primary border-top border-bottom' style={{height: 60}}>
          <td></td>
          <td className='d-none d-md-block'></td>
          <td colSpan={3}  className='pt-4 pb-4'>
              <CartDetailsSubtotal presentState={props.actualState}/>
              <CartDetailsTax presentState={props.actualState}/>
              <CartDetailsTotal presentState={props.actualState}/>
          </td>
        </tr>

        <tr className='text-end'>
          <td></td>
          <td className='d-none d-md-block'></td>
          <td colSpan={3}>
              <CartBtn
                      btnType={'button'} 
                      btnClass={'btn btn-outline-danger me-2 mt-2'} 
                      mainText={'Empty'} 
                      btnIconClass={'bi bi-trash fs-5'}
                      onClickFunc={handleEmptyCart}
                      />
              <CartBtn 
                btnType={'button'} 
                btnValue={''}
                btnClass={'btn btn-outline-secondary mt-2'} 
                mainText={'Export PDF'} 
                dataBsToggle={'modal'}
                btnIconClass={'bi bi-file-earmark-pdf fs-5'}
                dataBsTarget={'#pdfModal'}
                />
          </td>
        </tr>
        
    </tbody>
  )
}

export default CartDetails

