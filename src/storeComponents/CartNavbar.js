import React from 'react'
import { NavLink } from 'react-router-dom'




const CartNavbar = () => {
    return (
        <nav className="navbar sticky-top navbar-expand-lg bg-dark navbar-dark border-bottom border-secondary pt-3 pb-3">
            <div className="container">
                <a className="navbar-brand" href="#"><i className="bi bi-house-door text-warning"></i>&nbsp;Store</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                    <div className="navbar-nav text-center">
                        <NavLink className="nav-link" aria-current="/" to='/'>Home</NavLink>
                        <NavLink className="nav-link" to='/form-page'>Form</NavLink>
                        <NavLink className="nav-link" to='/products-page'>Products</NavLink>
                        <NavLink className="nav-link" to='/cart-page'>Cart</NavLink>
                    </div>
                </div>
            </div>
            </nav>
    )
}

export default CartNavbar