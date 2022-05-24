import React from 'react'
import CartFormLogo from './CartFormLogo'
import CartProductsLogo from './CartProductsLogo'
import CartDetailsLogo from './CartDetailsLogo'
import { NavLink } from 'react-router-dom'

const MainCartHome = (props) => {
  return (
      <div className="m-1 m-sm-0">
        <div className='container pt-5 pb-5 p-sm-5 mt-5 mb-5'>
            <div className="row p-sm-5">
                <div className="col-sm-4 text-center p-3 p-sm-5">
                    <NavLink className="btn menuBoxBtn btn-lg p-5 border" to='/form-page'><CartFormLogo textColor={'text-light'}/></NavLink>
                </div>
                <div className="col-sm-4 text-center p-3 p-sm-5">
                    <NavLink className='btn menuBoxBtn btn-lg p-5 border' to='/products-page'><CartProductsLogo textColor={'text-light'}/></NavLink>
                </div>
                <div className="col-sm-4 text-center p-3 p-sm-5">
                    <NavLink className='btn menuBoxBtn btn-lg p-5 border' to='/cart-page'><CartDetailsLogo badgeTextColor={'text-light'} textColor={'text-light'} actualState={props.actualState}/></NavLink>
                </div>
            </div>
        </div>
      </div>
    
  )
}

export default MainCartHome