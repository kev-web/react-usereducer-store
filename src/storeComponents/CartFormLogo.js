import React from 'react'

const CartFormLogo = (props) => {
  return (
    <h1 className='display-4 text-center p-0 m-0'>
        <i className={`bi bi-file-earmark-code ${props.textColor}`}></i>
    </h1>
  )
}

export default CartFormLogo