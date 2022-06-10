import React from 'react'
import { NavLink } from 'react-router-dom'




const CartNavbar = (props) => {
    return (
        <>
            <nav className="navbar sticky-top navbar-expand-lg navbar-dark p-3 border-bottom border-warning border-3">
                <div className="container">
                    <NavLink className="navbar-brand nav-link p-0" aria-current="/" to='/'>
                        <h2 className='m-0 text-light'>
                            <i className="bi bi-robot fs-1 text-warning m-0"></i>&nbsp;App
                        </h2>
                    </NavLink>
                
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="bi bi-three-dots text-warning"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                        <div className="navbar-nav text-center">
                            <NavLink className="nav-link fs-5" aria-current="/" to='/'>Home</NavLink>
                            <NavLink className="nav-link fs-5" to='/form-page'>Form</NavLink>
                            <NavLink className="nav-link fs-5" to='/products-page'>Products</NavLink>
                            <NavLink className="nav-link fs-5" to='/cart-page'>Cart</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="container p-0">
                {props.mainState.formMessage ?
                    <p className='p-2 text-center mb-0 w-75 mx-auto' id='formMessage'>Your product has been added!</p>
                : <p className='p-2 mb-0' id='formMessage2'></p>
                }
            </div>
            
        </>
        
    )
}

export default CartNavbar