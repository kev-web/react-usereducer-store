import React from 'react'
import CartBtn from './CartBtn';
import CartBtnIcon from './CartBtnIcon';
import CartNewBlankSpace from './CartNewBlankSpace';

const CartProductCard = (props) => {

    const addCartHandler = (e) => {
        props.addToCart(e);
    }

    const removeCartHandler = (e) => {
        props.removeFromCart(e)
    }

    const handleDeleteItem = (e) => {
        let itemToDelete = e.target.value
        props.dispatchMethod({
            type: 'delete-item',
            payload: itemToDelete
        })
    }

    const handleEditItem = (e) => {
        console.log('you want to edit this!')
        let objectData = JSON.parse(e.target.value);
        props.dispatchMethod({
            type: 'send-object-info',
            payload: objectData
        })
    }


  return (
    <div className="card m-2 border-0" style={{width:'20rem', display: "inline-block"}} key={props.loopItem.id}>
        <img src={props.loopItem.pic} width={"100%"} className='img-fluid card-img' alt='product-card-img'/>
        <div className="card-body overflow-auto">
            <h5 className="card-title mb-3">{props.loopItem.name}</h5>
            <p className="text-muted">{props.loopItem.id}</p>
            <p className="card-text text-start">{props.loopItem.description}</p>
            <p className='lead text-end'>${props.loopItem.price}</p>
      
            <CartBtn 
                btnType={'button'} 
                btnValue={props.loopItem.id} 
                btnClass={'btn btn-outline-warning me-2'} 
                btnIcon={<CartBtnIcon iconTagClassName={'bi bi-dash-circle text-secondary'}/>} 
                mainText={'from Cart'} 
                onClickFunc={removeCartHandler}
                newBlankSpace={<CartNewBlankSpace />}/>

            <CartBtn 
                btnType={'button'} 
                btnValue={props.loopItem.id} 
                btnClass={'btn btn-primary'} 
                btnIcon={<CartBtnIcon iconTagClassName={'bi bi-plus-circle'}/>} 
                mainText={'to Cart'} 
                onClickFunc={addCartHandler}
                newBlankSpace={<CartNewBlankSpace />}/>
       
            <p className='text-end mb-0 mt-3'>Quantity in Cart:&nbsp;    
                {props.currentState.cart.filter(element=>element.id === props.loopItem.id).length}
            </p>
            <p className='text-end mt-0 mb-0'>In Cart:&nbsp;{String(props.loopItem.addedToCart)}</p>

            <CartBtn 
                btnType={'button'} 
                btnValue={
                    JSON.stringify({
                    productId: props.loopItem.id,
                    productName: props.loopItem.name,
                    productDescription: props.loopItem.description,
                    productPrice: props.loopItem.price,
                    productPic: props.loopItem.pic,
                    productAddedToCart: props.loopItem.addedToCart
                })}

                btnClass={'btn btn-outline-success w-100 mt-2'}  
                mainText={'Edit'} 
                onClickFunc={handleEditItem}
                dataBsToggle={'modal'}
                dataBsTarget={'#editProductModal'}/>

            <CartBtn 
                btnType={'button'} 
                btnValue={props.loopItem.id} 
                btnClass={'btn btn-outline-danger w-100 mt-2'}  
                mainText={'Delete'} 
                onClickFunc={handleDeleteItem}/>
        </div>
    </div>
  )
}

export default CartProductCard