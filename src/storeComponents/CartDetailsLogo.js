import React from 'react'

const CartDetailsLogo = (props) => {
  return (
    <h1 className='display-3 text-center mb-5 mt-3 p-2'>
        <i className="bi bi-cart3 pe-2 ps-2 pt-1 position-relative">
            <span className="position-absolute top-0 start-90 translate-middle badge rounded-pill p-2 bg-danger">
                <p style={{fontSize:24, padding: 0, margin: 0}}>{props.actualState.cart.length}</p>
            </span>
        </i>
    </h1>
  )
}

export default CartDetailsLogo