import React from 'react'
import CartFormLogo from './CartFormLogo'
import CartProductsLogo from './CartProductsLogo'
import CartDetailsLogo from './CartDetailsLogo'
import { Link, useNavigate } from 'react-router-dom'

const MainCartHome = (props) => {

    let navigate = useNavigate()

    const handleNavigation = (btnEventValue) => {
        setTimeout(()=>{
            props.dispatchMethod({
                type: 'home-menu-btn-animate-off',
            })
            if(btnEventValue === 'main-form'){
                navigate('/form-page')
            } else if (btnEventValue === 'main-products'){
                navigate('/products-page')
            } else if (btnEventValue === 'main-cart'){
                navigate('/cart-page')
            }
        }, 1500)
    }

    const handleMenuBtnAnimation = (e) => {
        e.preventDefault()
        let btnValue = e.target.value
        props.dispatchMethod({
            type: 'home-menu-btn-animate',
        })
        
        handleNavigation(btnValue)        
    }

    return (
        <div className="m-1 m-sm-0">
            <div className='container pt-5 pb-5 p-sm-5 mt-5 mb-5'>
                <div className="row p-sm-5">
                    <div className="col-sm-4 text-center p-3 p-sm-5">
                        <button 
                               
                                className={props.actualState.homeBtnAnimation  ?
                                        "btn menuBoxBtn-animation btn-lg p-5"
                                    :
                                        "btn menuBoxBtn btn-lg p-5"
                                    }
                                value={'main-form'}
                                onClick={handleMenuBtnAnimation}>
                            <CartFormLogo textColor={'text-secondary'}/>
                        </button>
                    </div>

                    <div className="col-sm-4 text-center p-3 p-sm-5">
                        <button 
                                className={props.actualState.homeBtnAnimation ?
                                        "btn menuBoxBtn-animation btn-lg p-5"
                                    :
                                        "btn menuBoxBtn btn-lg p-5"
                                    }
                                value={'main-products'}
                                onClick={handleMenuBtnAnimation}>
                            <CartProductsLogo textColor={'text-secondary'}/>
                        </button>
                    </div>

                    <div className="col-sm-4 text-center p-3 p-sm-5">
                        <button 
                                className={props.actualState.homeBtnAnimation ?
                                        "btn menuBoxBtn-animation btn-lg p-5"
                                    :
                                        "btn menuBoxBtn btn-lg p-5"
                                    }
                                value={'main-cart'}
                                onClick={handleMenuBtnAnimation}>
                            <CartDetailsLogo 
                                displaySize={'display-3'} 
                                textColor={'text-secondary'} 
                                badgeTextColor={'text-light'} 
                                alignText={'text-center'} 
                                circlePadding={'p-2'} 
                                fontSize={20} 
                                pillColorBg={'bg-danger'} 
                                actualState={props.actualState}/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default MainCartHome