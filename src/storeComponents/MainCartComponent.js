import React, {useReducer, useEffect} from 'react'
import { Routes, Route } from 'react-router-dom';
import MainCartHome from './MainCartHome';
import MainCartForm from './MainCartForm';
import MainCartProducts from './MainCartProducts';
import MainCart from './MainCart';
import CartModal from './CartModal';
import PDFGenerator from './PDFGenerator';
import CartCardDetails from './CartCardDetails'
import CartDetailsLogo from './CartDetailsLogo';
import CartNavbar from './CartNavbar';
// import CartFormLogo from './CartFormLogo';
// import CartForm from './CartForm';
// import CartProductCard from './CartProductCard';
// import CartDetails from './CartDetails';
// import CartDetailsLogo from './CartDetailsLogo';
// import CartProductsLogo from './CartProductsLogo';
// import CartTitle from './CartTitle';


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
    },
    formMessage: false,
    formButtonAnimate: false,
    homeBtnAnimation: false,
    homeBtnValue: ''
}

//Reducer function:
const reducer = (state, action) => {
    switch(action.type){

        case 'add-item':
            return {...state, products: [...state.products, action.payload], formMessage: true, formButtonAnimate: true}
            // return {...state, formMessage: true, formButtonAnimate: true}

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

        case 'form-message':
            return  {...state, formMessage: false}


        case 'form-btn-animate':
            return {...state, formButtonAnimate: false}


        case 'home-menu-btn-animate':
            console.log("animation starts...")
            return {...state, homeBtnAnimation: true, homeBtnValue: action.payload}

        case 'home-menu-btn-animate-off':
            console.log("animation ended...")
            return {...state, homeBtnAnimation: false, homeBtnValue: ''}

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

        <div>

            <CartNavbar mainState={mainState}/>

            <PDFGenerator mainState={mainState} />
            <CartModal dispatchMethod={dispatch} actualState={mainState}/>

            <Routes>
                {/* Home Route */}
                <Route path='/' element={<MainCartHome 
                                            actualState={mainState} 
                                            dispatchMethod={dispatch} 
                                            />
                                        }/>

                {/* Form Route */}
                <Route path='form-page' element={<MainCartForm dispatchMethod={dispatch} mainState={mainState}/>}/>

                {/* Products Route */}
                <Route 
                    path='products-page' 
                    element={<MainCartProducts  
                                addToCart={handleAddToCart} 
                                removeFromCart={handleRemoveFromCart} 
                                mainState={mainState}
                                dispatchMethod={dispatch}
                                />}
                />

                {/* Cart Route */}
                <Route 
                    path='cart-page' 
                    element={<MainCart 
                                actualState={mainState} 
                                addItemToCart={handleAddToCart} 
                                removeItemFromCart={handleRemoveFromCart} 
                                dispatchMethod={dispatch}/>}
                />

                {/* Product Details Route */}
                <Route 
                    path='product-details/:itemToShow' 
                    element={<CartCardDetails 
                                addArticuloToCart={handleAddToCart}
                                removeArticuloFromCart={handleRemoveFromCart}
                                mainState={mainState}
                            />}
                />


              


            </Routes>
        </div>
    )
}

export default MainCartComponent;