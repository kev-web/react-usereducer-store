import React from 'react'
import CartBtn from './CartBtn';
import { NavLink } from 'react-router-dom';

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
    <div className="card m-2 border-0" style={{width:'19.6rem', display: "inline-block"}} key={props.loopItem.id}>

    
        <NavLink 
            className='p-0 m-0 nav-link fw-bold fst-italic text-start beigeTextColor fs-5' 
            to={`/product-details/${props.loopItem.id}`}
            // state={{
            //     articuloId: props.loopItem.id,
            //     articuloPic: props.loopItem.pic,
            //     articuloName: props.loopItem.name,
            //     articuloDescription: props.loopItem.description,
            //     articuloPrice: props.loopItem.price,
            // }} 
            ><img src={props.loopItem.pic} width={"100%"} className='img-fluid card-img' alt='product-card-img'/>
        </NavLink>
      
        
        
        <div className="card-body overflow-auto">
            <div className="row card-title mb-4">
                <div className="col-10">
                    <h4 className='p-0 ps-2 fw-bold fst-italic text-start beigeTextColor fs-5'>{props.loopItem.name}</h4>
                </div>
                <div className="col-2">
                    <a className='btn border-0 p-0' data-bs-toggle="collapse" href={`#cardCollapseBox${props.loopItem.id}`} role="button">
                        <i class="bi bi-gear beigeTextColor"></i>
                    </a>
                </div>
            </div>
           
            <div className='row mb-3'>
                <div className="col-6 text-start">
                    <h3 className='ms-3'>
                        <i className="bi bi-cart3 position-relative beigeTextColor">
                            <span className="position-absolute top-0 start-90 translate-middle badge rounded-pill p-1 bg-success">
                                <p style={{fontSize:14, padding: 0, margin: 0, color: 'white'}}>
                                    {props.currentState.cart.filter(element=>element.id === props.loopItem.id).length}
                                </p>
                            </span>
                        </i>
                    </h3>
                </div>
                <div className="col-6">
                    <p className='fw-bold lead text-end me-3 beigeTextColor'>${props.loopItem.price}</p>
                </div>
            </div>
      
            <CartBtn 
                btnType={'button'} 
                btnValue={props.loopItem.id} 
                btnClass={'btn btn-outline-warning me-2 mb-2'} 
                mainText={'Remove Cart'} 
                onClickFunc={removeCartHandler}/>

            <CartBtn 
                btnType={'button'} 
                btnValue={props.loopItem.id} 
                btnClass={'btn btn-outline-primary mb-2'} 
                mainText={'Add Cart'} 
                onClickFunc={addCartHandler}
                />

            <p className='text-light mb-0 p-0 pe-2 text-end'>{props.currentState.products.indexOf(props.loopItem)}</p>


            <div className="collapse p-0" id={`cardCollapseBox${props.loopItem.id}`}>
                <p className='text-end card-quantity mb-0 mt-1 me-3 text-light'>Quantity in Cart:&nbsp;    
                    {props.currentState.cart.filter(element=>element.id === props.loopItem.id).length}
                </p>
                <p className='text-end card-bool mt-0 mb-0 me-3 text-light'>In Cart:&nbsp;{String(props.loopItem.addedToCart)}</p>

                <div className='text-end me-3 p-0 mt-2'>
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