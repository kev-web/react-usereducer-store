import React from 'react'
import { useParams } from 'react-router-dom'
import CartBtn from './CartBtn';


const CartCardDetails = (props) => {

    //This is when we pass props using Navlink, we need to use "useLocation()" hook:
    // const location = useLocation();
    //We destructure it:
    // const { articuloId, articuloPic, articuloName, articuloDescription, articuloPrice } = location.state
    //***OR we can use in the JSX***:
    // location.state.articuloId
    // location.state.articuloName
    //etc...

    //----------Cart Button handlers--------------------:
    const cardDetailsAddToCartHandler = (e) => {
        props.addArticuloToCart(e)
    }

    const cardDetailsRemoveFromCartHandler = (e) => {
        props.removeArticuloFromCart(e)
    }

    //-----------Extracting the URL params--------------:
    //Initialize:
    const params = useParams();
    //Get the object value of the url key ""
    const itemToShow = params.itemToShow


    console.log(props.mainState.products.filter(item => item.id === itemToShow))

    const elementArray = props.mainState.products.filter(item => item.id === itemToShow)
    const [ itemFound ] = elementArray

    return (
        <div className='container mt-5 mb-5'>

            <div className="row align-items-center m-0">
                <div className="col-sm-6 p-1 p-sm-0">
                    <img src={itemFound.pic} className='img-fluid' alt="product-details-image" />
                </div>
                <div className="col-sm-6 p-4 pt-0 p-sm-5">
                    <h1 className='display-3 mb-4 mb-sm-5 text-center'>{itemFound.name}</h1>

                    <h2 className='text-center mb-3'>
                        <i className="bi bi-cart3 position-relative text-dark">
                            <span className="position-absolute top-0 start-90 translate-middle badge rounded-pill p-1 bg-success">
                                <p style={{fontSize:14, padding: 0, margin: 0, color: 'white'}}>
                                    {props.mainState.cart.filter(element=>element.id === itemFound.id).length}
                                </p>
                            </span>
                        </i>
                    </h2>


                    <p className='text-muted text-center mb-4 productDetailsId'>Id:&nbsp;{itemFound.id}</p>
                    <p className='pb-4 mb-2 text-start text-sm-center'>{itemFound.description}</p>
                    <p className='fs-1 text-end text-sm-center mb-4 pe-3'>${itemFound.price}</p>
                    <div className="p-0 text-center">
                        <CartBtn 
                            btnType={'button'} 
                            btnValue={itemFound.id} 
                            btnClass={'btn btn-warning me-2 mb-2'} 
                            mainText={'Remove Cart'} 
                            onClickFunc={cardDetailsRemoveFromCartHandler}
                            />
                        <CartBtn 
                            btnType={'button'} 
                            btnValue={itemFound.id} 
                            btnClass={'btn btn-primary mb-2'} 
                            mainText={'Add Cart'} 
                            onClickFunc={cardDetailsAddToCartHandler}
                            />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartCardDetails