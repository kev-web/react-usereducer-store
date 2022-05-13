import React from 'react'

const CartBtn = ({btnType, btnValue, btnClass, btnIcon, mainText, onClickFunc, newBlankSpace, dataBsToggle, dataBsTarget}) => {

  return (
      <button 
          type={btnType} 
          className={btnClass} 
          value={btnValue} 
          onClick={onClickFunc}
          data-bs-toggle={dataBsToggle}
          data-bs-target={dataBsTarget}>
              {btnIcon}{newBlankSpace}{mainText}
      </button>
  )
}

export default CartBtn