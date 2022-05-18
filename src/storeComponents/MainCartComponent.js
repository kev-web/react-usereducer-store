import React, {useReducer, useEffect} from 'react'
import CartForm from './CartForm';
import CartProductCard from './CartProductCard';
import CartDetails from './CartDetails';
import CartFormLogo from './CartFormLogo';
import CartDetailsLogo from './CartDetailsLogo';
import CartProductsLogo from './CartProductsLogo';
import CartModal from './CartModal';
import CartTitle from './CartTitle';
import PDFGenerator from './PDFGenerator';





//Initial State of useReducer() hook:
const initialValue = {
    products: JSON.parse(localStorage.getItem('myProducts')) || [],
    cart: JSON.parse(localStorage.getItem('myCart')) || [],
    subTotalDue: 0,
    taxDueToPay: 0,
    totalToPay: 0,
    modalObject: {
        productId: '',
        productName: '',
        productDescription: '',
        productPrice: '',
        productPic: '',
        productAddedToCart: ''
    }
}

//Reducer function:
const reducer = (state, action) => {
    switch(action.type){

        case 'add-item':
            return {...state, products: [...state.products, action.payload]}

        case 'delete-item':
            let newArray = [...state.products];
            newArray.map((item, index) => {
                if(item.id === action.payload){
                    newArray.splice(index, 1);
                }
            });
            let cartProducts = state.cart.filter(product => {
                return product.id !== action.payload;
            })
            return {...state, products: newArray, cart: cartProducts}

        case 'add-to-cart':
            let newArray2 = [...state.products];
            let foundObject = {}
            newArray2.map((item) => {
                if(item.id === action.payload){
                    foundObject = {...item, addedToCart: true};
                    item.addedToCart = true;
                }
            });
            return {...state, cart: [...state.cart, foundObject],}

        case 'remove-from-cart':
            let newCartArray = [...state.cart];
            let i = 0;
            for(i=0; i<newCartArray.length; i++){
                if(newCartArray[i].id === action.payload){
                    newCartArray.splice(i, 1);
                    break;
                }
            };

            let newValue = newCartArray.filter((item) => {
                return item.id === action.payload
            })

            let existingProducts = [...state.products]

            if(newValue.length === 0){
                console.log('that item is no longer in the cart')
                existingProducts.map(elemento => {
                    if(elemento.id === action.payload){
                        return elemento.addedToCart = false;
                    }
                })
            }
            return {...state, cart: newCartArray, products: existingProducts}
         
        case 'calculate-total':
            let initV = 0;
            let taxTotal = 0;
            let finalTotalDue = 0;
            let currentCartItems = [...state.cart]
                
            let preTotal = currentCartItems.reduce((accumV, currentV)=> {
                    return parseFloat(accumV) + parseFloat(currentV.price)
                }, initV)

            taxTotal = (preTotal*0.15);
            finalTotalDue = parseFloat(preTotal + taxTotal);
            
            return {...state, subTotalDue: preTotal.toFixed(2) , taxDueToPay: taxTotal.toFixed(2), totalToPay: finalTotalDue.toFixed(2)}

        case 'empty-the-cart':
            
            let emptyCart = [];
            let productsArray = [...state.products];
            productsArray.map(item=>{
                return item.addedToCart = false;
            })
            return {...state, products: productsArray, cart: emptyCart}

        case 'send-object-info':
            let objectInfoToEdit = action.payload;

            return {...state,  modalObject: objectInfoToEdit}

        case 'save-item':
            let formObject = action.payload;
            console.log(formObject)
            let currentProducts = [...state.products]
            let cartItemsInCart = [...state.cart]
            currentProducts.forEach((currentItem, currentIndex) => {
                if(currentItem.id === formObject.product_modal_id){
                    currentItem.name = formObject.product_modal_name
                    currentItem.description = formObject.product_modal_description
                    currentItem.price = formObject.product_modal_price
                    currentItem.pic = `https://source.unsplash.com/random/300x300/?${formObject.product_modal_name.split(' ')[1]},${formObject.product_modal_name.split(' ')[0]}`
                }
            })
            cartItemsInCart.forEach((cartItem) => {
                if(cartItem.id === formObject.product_modal_id){
                    cartItem.name = formObject.product_modal_name
                    cartItem.description = formObject.product_modal_description
                    cartItem.price = formObject.product_modal_price
                    cartItem.pic = `https://source.unsplash.com/random/300x300/?${formObject.product_modal_name.split(' ')[1]},${formObject.product_modal_name.split(' ')[0]}`
                }
            })
            let clearModalObject = {
                productId: 'saved',
                productName: 'saved',
                productDescription: 'saved',
                productPrice: 0,
                productPic: 'saved',
                productAddedToCart: 'saved'
            }

            return {...state, products: currentProducts, cart: cartItemsInCart, modalObject: clearModalObject}

        case 'quantity-box-change':
            console.log('We are in QUANTITY-BOX-CHANGE dispatch:')
            console.log(action.payload.quantityNumber)
            let cartItemsNow = [...state.cart]
            console.log(cartItemsNow.length)
            let otherItems = cartItemsNow.filter((product)=>{
                return product.id !== action.payload.cartItemId
            })
            console.log(otherItems.length)
            for(let i=0; i<action.payload.quantityNumber; i++){
                otherItems.push(action.payload.cycledItemSent)
            }
            console.log(otherItems.length);

            return {...state, cart: otherItems}

        default:
            return state;
    }
}


function MainCartComponent() {

    //userReducer hook:
    const [mainState, dispatch] = useReducer(reducer, initialValue)

    //useEffect hook:
    useEffect(()=> {
        console.log('mainComponent useEffect...')
        dispatch({
            type: 'calculate-total',
        })

        localStorage.setItem('myProducts', JSON.stringify(mainState.products))
        localStorage.setItem('myCart', JSON.stringify(mainState.cart))
    }, [mainState.cart, mainState.products])

    const handleAddToCart = (e) => {
        e.preventDefault();
        let itemAddedId = e.target.value;
        dispatch({
            type: 'add-to-cart',
            payload: itemAddedId
        })
    };

    const handleRemoveFromCart = (e) => {
        let itemRemoveId = e.target.value;
        dispatch({
            type: 'remove-from-cart',
            payload: itemRemoveId
        })
    };

    //JSX:
    return (
        <div className='container-fluid p-0'>

            <PDFGenerator mainState={mainState} />

            <CartModal dispatchMethod={dispatch} actualState={mainState}/>

            <div className="container-fluid" id='topHomeContainer'>

                <div className="container">
                    <CartTitle />
                </div>
                
                <div className='container p-0 pt-0'>
                    <div className="row justify-content-around">
                        <div className="col-sm-4 p-3 p-lg-4 mt-3 mb-5">
                            <CartFormLogo />
                            <CartForm dispatchMethod={dispatch}/>
                        </div>
                        <div className="col-sm-7 p-2 p-lg-4 mt-3 mb-5" >
                            <CartDetailsLogo actualState={mainState}/>
                            <table className="table table-borderless">
                                <thead className='border-bottom border-top'>
                                    <tr className='text-center align-middle' style={{height: 60}} id='tableHead'>
                                        <th scope="col" style={{width: "25%"}}><h5>Item</h5></th>
                                        <th scope='col' style={{width: "12%"}}>&nbsp;</th>
                                        <th scope="col" style={{width: "17%"}}><h5>Qty</h5></th>
                                        <th scope="col" style={{width: "23%"}}><h5>Price</h5></th>
                                        <th scope="col" style={{width: "23%"}}><h5>SubT</h5></th>
                                    </tr>
                                </thead>
                                <CartDetails 
                                actualState={mainState} 
                                addItemToCart={handleAddToCart} 
                                removeItemFromCart={handleRemoveFromCart} 
                                dispatchMethod={dispatch}
                                />
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid pt-5 pb-5" id='bottomHomeContainer'>
                <div className="container p-0 pt-5 text-center">
                    <CartProductsLogo />
                    {
                        mainState.products.map(item => (
                            <CartProductCard 
                                key={item.id} 
                                loopItem={item} 
                                addToCart={handleAddToCart} 
                                removeFromCart={handleRemoveFromCart} 
                                currentState={mainState}
                                dispatchMethod={dispatch}/>
                        ))
                    }
                </div>
            </div>
         
        </div> 
    )
}

export default MainCartComponent;