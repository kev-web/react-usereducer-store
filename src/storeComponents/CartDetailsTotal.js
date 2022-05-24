import React from 'react'

const CartDetailsTotal = (props) => {
  return (
        <h4 className='text-dark text-end me-5'>Total: ${props.presentState.totalToPay}</h4>
  )
}

export default CartDetailsTotal