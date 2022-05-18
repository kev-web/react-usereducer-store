import React from 'react'

const CartDetailsSubtotal = (props) => {
  return (
    <div>
        <h5 className='text-light text-end me-5 text-muted'>Subtotal: ${props.presentState.subTotalDue}</h5>
    </div>
  )
}

export default CartDetailsSubtotal