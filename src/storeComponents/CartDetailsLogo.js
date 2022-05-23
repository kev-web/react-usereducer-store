import React from 'react'

const CartDetailsLogo = (props) => {
  return (
    <h1 className='display-4 text-center m-0 p-0'>
        <i className="bi bi-cart3 position-relative">
            <span className="position-absolute top-0 start-90 translate-middle badge rounded-pill p-2 bg-danger">
                <p style={{fontSize:20, padding: 0, margin: 0}}>{props.actualState.cart.length}</p>
            </span>
        </i>
    </h1>
  )
}

export default CartDetailsLogo