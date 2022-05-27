import React from 'react'

const CartDetailsLogo = (props) => {
  return (
    <h2 className={`${props.displaySize} ${props.alignText} m-0 p-0`}>
        <i className={`bi bi-cart3 position-relative ${props.textColor}`}>
            <span className={`position-absolute top-0 start-90 translate-middle badge rounded-pill ${props.circlePadding} ${props.pillColorBg}`}>
                <p className={`${props.badgeTextColor}`} style={{fontSize: props.fontSize, padding: 0, margin: 0}}>{props.actualState.cart.length}</p>
            </span>
        </i>
    </h2>
  )
}

export default CartDetailsLogo