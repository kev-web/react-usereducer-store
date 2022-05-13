import React, {useState, useEffect} from 'react'

const CartInputBoxQuantity = (props) => {

  let initialValue = props.theState.cart.filter(element=>element.id === props.cycledItem.id).length
  
  const [boxQuantity, setBoxQuantity] = useState(initialValue.toString())

  const handleInputBox = (e) => {
    console.log("HANDLE BOX EVENT")
    console.log(e.target.value)
    console.log(parseInt(e.target.value))
    setBoxQuantity(e.target.value)
    let boxInputInfo = {
      quantityNumber: parseInt(e.target.value),
      cartItemId: props.cycledItem.id,
      cycledItemSent: props.cycledItem
    }
    props.dispatchMethodBox({
      type: 'quantity-box-change',
      payload: boxInputInfo
    })
  }
  
  useEffect(()=>{
    console.log('inputBOX useEffect was executed!')
    console.log(boxQuantity);
    setBoxQuantity(initialValue.toString())
    console.log(Number.isInteger(boxQuantity))
  }, [props.theState.cart])
  
  return (
    <input 
        type="text" 
        className='form-control text-center' 
        value={boxQuantity}
        onChange={handleInputBox}
        step="1" min="0"
        maxLength="3"
        />
  )
}

export default CartInputBoxQuantity


// 