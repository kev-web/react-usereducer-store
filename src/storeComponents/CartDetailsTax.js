import React from 'react'

const CartDetailsTax = (props) => {
  return (
    <div>
        <h5 className='text-light text-end me-5 text-muted'>Tax: ${props.presentState.taxDueToPay}</h5>
    </div>
  )
}

export default CartDetailsTax