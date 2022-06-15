import React from 'react'
import CartFormLogo from './CartFormLogo'
import CartProductsLogo from './CartProductsLogo'
import CartDetailsLogo from './CartDetailsLogo'
import { Link, useNavigate } from 'react-router-dom'

const MainCartHome = (props) => {

    let navigate = useNavigate()

    return (
        <div className="m-1 m-sm-0">
            <div className='container pt-5 pb-5 p-sm-5 mt-5 mb-5'>
                <div className="row p-sm-5">
                    <div className="col-sm-4 text-center p-3 p-sm-5">
                        <button  
                            className={(props.actualState.homeBtnAnimation === true) && (props.actualState.homeBtnValue == 'main-form') ?
                                    "btn menuBoxBtn-animation btn-lg p-5"
                                :
                                    "btn menuBoxBtn btn-lg p-5"
                                }
                            onClick={()=>{
                                props.dispatchMethod({
                                    type: 'home-menu-btn-animate',
                                    payload: 'main-form'
                                })
                                setTimeout(()=>{
                                    props.dispatchMethod({
                                        type: 'home-menu-btn-animate-off'
                                    })
                                    navigate('/form-page')
                                }, 1000)
                                }}>
                            <CartFormLogo textColor={'text-secondary'}/>
                        </button>
                    </div>

                    <div className="col-sm-4 text-center p-3 p-sm-5">
                        <button 
                            className={(props.actualState.homeBtnAnimation === true) && (props.actualState.homeBtnValue == 'main-products') ?
                                    "btn menuBoxBtn-animation btn-lg p-5"
                                :
                                    "btn menuBoxBtn btn-lg p-5"
                                }
                            onClick={()=>{
                                props.dispatchMethod({
                                    type: 'home-menu-btn-animate',
                                    payload: 'main-products'
                                })
                                setTimeout(()=>{
                                    props.dispatchMethod({
                                        type: 'home-menu-btn-animate-off'
                                    })
                                    navigate('/products-page')
                                }, 1000)
                                }}>
                            <CartProductsLogo textColor={'text-secondary'}/>
                        </button>
                    </div>

                    <div className="col-sm-4 text-center p-3 p-sm-5">
                        <button 
                            className={(props.actualState.homeBtnAnimation === true) && (props.actualState.homeBtnValue == 'main-cart')  ?
                                    "btn menuBoxBtn-animation btn-lg p-5"
                                :
                                    "btn menuBoxBtn btn-lg p-5"
                                }
                            onClick={()=>{
                                props.dispatchMethod({
                                    type: 'home-menu-btn-animate',
                                    payload: 'main-cart'
                                })
                                setTimeout(()=>{
                                    props.dispatchMethod({
                                        type: 'home-menu-btn-animate-off'
                                    })
                                    navigate('/cart-page')
                                }, 1000)
                                }}>
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