import React from 'react'
import CartBtn from './CartBtn'
import CartInputBoxQuantity from './CartInputBoxQuantity'

const CartDetailsRow = (props) => {

    const addItemToCart2Handler = (e) => {
        props.addItem(e)
    }

    const removeItemFromCart2Handler = (e) => {
        props.removeItem(e)
    }

 
  return (

        <tr key={props.currentItem.id} className='text-center align-middle tableGlassB'>
            <td>{props.currentItem.name}</td>
            <td style={{
                    backgroundImage: `url(${props.currentItem.pic})`, 
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    width: '60px',
                    height: '60px'
                    }}>        
            </td>
            <td className='row'>
                <div className="col-sm-6">
                    <CartInputBoxQuantity theState={props.actualStateTwo} cycledItem={props.currentItem} dispatchMethodBox={props.dispatchMethod}/>
                </div>
                <div className="col-sm-6 p-0">
                    <div className="btn-group" role="group">
                        <CartBtn 
                            btnType={'button'} 
                            btnValue={props.currentItem.id} 
                            btnClass={'btn btn-primary'} 
                            mainText={'+'} 
                            onClickFunc={addItemToCart2Handler}/>
                        <CartBtn 
                            btnType={'button'} 
                            btnValue={props.currentItem.id} 
                            btnClass={'btn btn-warning'} 
                            mainText={'-'} 
                            onClickFunc={removeItemFromCart2Handler}/>
                    </div>
                </div>
            </td>
            <td>${props.currentItem.price}</td>
            <td>
                ${
                ((props.actualStateTwo.cart.filter(element=>element.id === props.currentItem.id).length)*(props.currentItem.price)).toFixed(2)
                }
            </td>
        </tr>
  )
}

export default CartDetailsRow
