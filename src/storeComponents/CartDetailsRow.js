import React from 'react'
import CartBtn from './CartBtn'
import CartInputBoxQuantity from './CartInputBoxQuantity'
import CartBtnIcon from './CartBtnIcon'

const CartDetailsRow = (props) => {

    const addItemToCart2Handler = (e) => {
        props.addItem(e)
    }

    const removeItemFromCart2Handler = (e) => {
        props.removeItem(e)
    }

 
  return (

        <tr key={props.currentItem.id} className='text-center align-middle'>
            <td className='text-start'>{props.currentItem.name}</td>
            <td className='d-none d-md-block'>      
                <div style={{
                        backgroundImage: `url(${props.currentItem.pic})`, 
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        width: '100%',
                        height: '50px',
                        }}
                    >
                    
                </div>
            </td>
            <td className='p-0 m-0'>
                <div className="row m-0 p-0">
                    <div className="col-sm-6 p-0">
                        <CartInputBoxQuantity theState={props.actualStateTwo} cycledItem={props.currentItem} dispatchMethodBox={props.dispatchMethod}/>
                    </div>
                    <div className="col-sm-6 p-0">
                        <div className="btn-group w-100 h-100" role="group">
                            <CartBtn 
                                btnType={'button'} 
                                btnValue={props.currentItem.id} 
                                btnClass={'btn btn-secondary btn-sm fw-bold'} 
                                mainText={'↓'} 
                                onClickFunc={removeItemFromCart2Handler}/>
                            <CartBtn 
                                btnType={'button'} 
                                btnValue={props.currentItem.id} 
                                btnClass={'btn btn-primary btn-sm fw-bold'} 
                                mainText={'↑'} 
                                onClickFunc={addItemToCart2Handler}/>
                        </div>
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
