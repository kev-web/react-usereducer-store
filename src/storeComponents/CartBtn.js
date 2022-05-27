import React from 'react'

const CartBtn = ({btnType, btnValue, btnClass, btnIconClass, mainText, onClickFunc, dataBsToggle, dataBsTarget}) => {

  return (
      <button 
          type={btnType} 
          className={btnClass} 
          value={btnValue} 
          onClick={onClickFunc}
          data-bs-toggle={dataBsToggle}
          data-bs-target={dataBsTarget}>
          <i class={btnIconClass}></i>&nbsp;{mainText}
      </button>
  )
}

export default CartBtn