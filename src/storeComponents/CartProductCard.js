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
            <div className="row card-title mb-3">
                <div className="col-10">
                    <h5 className="fw-bold fst-italic text-start">{props.loopItem.name}</h5>
                </div>
                <div className="col-2">
                    <a className='btn border-0 p-0' data-bs-toggle="collapse" href={`#cardCollapseBox${props.loopItem.id}`} role="button">
                        <i class="bi bi-gear"></i>
                    </a>
                </div>
            </div>
            {/* <p className="text-muted">{props.loopItem.id}</p> */}
            <p className="card-text text-start">{props.loopItem.description}</p>
            <p className='fw-bold lead text-end'>${props.loopItem.price}</p>
      
            <CartBtn 
                btnType={'button'} 
                btnValue={props.loopItem.id} 
                btnClass={'btn btn-outline-warning me-2 mb-2'} 
                btnIcon={<CartBtnIcon iconTagClassName={'bi bi-dash-circle text-secondary'}/>} 
                mainText={'from Cart'} 
                onClickFunc={removeCartHandler}
                newBlankSpace={<CartNewBlankSpace />}/>

            <CartBtn 
                btnType={'button'} 
                btnValue={props.loopItem.id} 
                btnClass={'btn btn-primary mb-2'} 
                btnIcon={<CartBtnIcon iconTagClassName={'bi bi-plus-circle'}/>} 
                mainText={'to Cart'} 
                onClickFunc={addCartHandler}
                newBlankSpace={<CartNewBlankSpace />}/>
            
        

            <div className="collapse p-0" id={`cardCollapseBox${props.loopItem.id}`}>
                <p className='text-end card-quantity mb-0 mt-1'>Quantity in Cart:&nbsp;    
                    {props.currentState.cart.filter(element=>element.id === props.loopItem.id).length}
                </p>
                <p className='text-end card-bool mt-0 mb-0'>In Cart:&nbsp;{String(props.loopItem.addedToCart)}</p>

                <div className='text-center p-0 mt-2'>
                    <CartBtn 
                        btnType={'button'} 
                        btnValue={props.loopItem.id} 
                        btnClass={'btn btn-outline-danger btn-sm me-1'}  
                        mainText={'Delete'} 
                        onClickFunc={handleDeleteItem}/>
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
                        btnClass={'btn btn-outline-success btn-sm'}  
                        mainText={'Edit'} 
                        onClickFunc={handleEditItem}
                        dataBsToggle={'modal'}
                        dataBsTarget={'#editProductModal'}/>
                </div>
            </div>

            
            
        </div>
    </div>
  )
}

export default CartProductCard