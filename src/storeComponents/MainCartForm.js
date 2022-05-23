import React from 'react'
import CartFormLogo from './CartFormLogo'
import CartForm from './CartForm'

const MainCartForm = (props) => {
  return (
    <div className='container pt-5 pb-5 p-sm-5 mt-0 mb-0'>
        <div className="row justify-content-center m-0">
            <div className="col-sm-1">

            </div>
            <div className="col-sm-6 modalGlass p-4 pt-5 p-sm-5">
                <CartFormLogo />
                <CartForm dispatchMethod={props.dispatchMethod}/>
            </div>
            <div className="col-sm-1">

            </div>
        </div>
    </div>
  )
}

export default MainCartForm