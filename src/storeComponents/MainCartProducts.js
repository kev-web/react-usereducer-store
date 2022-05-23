import React from 'react'
import CartProductsLogo from './CartProductsLogo'
import CartProductCard from './CartProductCard'

const MainCartProducts = (props) => {
  return (
    <div className='container pt-5 pb-5 p-sm-5 mt-5 mb-5 modalGlass text-center'>

        <div className='pt-0 pb-5'>
            <CartProductsLogo />
        </div>
        <div className='p-0 pb-5'>
        {
            props.mainState.products.map(item => (
                <CartProductCard 
                    key={item.id} 
                    loopItem={item} 
                    addToCart={props.addToCart} 
                    removeFromCart={props.removeFromCart} 
                    currentState={props.mainState}
                    dispatchMethod={props.dispatchMethod}/>
            ))
        }
        </div>

        
        


    </div>
  )
}

export default MainCartProducts