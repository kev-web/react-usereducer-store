import React from 'react'

const CartDetailsTotal = (props) => {
  return (
        <h5 className='text-light text-start'>${props.presentState.totalToPay}</h5>
  )
}

export default CartDetailsTotal