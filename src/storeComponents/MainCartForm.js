import React from 'react'
import CartFormLogo from './CartFormLogo'
import CartForm from './CartForm'

const MainCartForm = (props) => {
  return (

    <div className='container pt-5 pb-5 p-sm-5 mt-0 mb-0'>
        <div className="row justify-content-center m-0">
            <div className="col-sm-1">

            </div>
            <div className="col-sm-6 p-3 p-sm-5 pt-sm-5">
                <CartFormLogo textColor={'text-dark'}/>
                <CartForm dispatchMethod={props.dispatchMethod} mainState={props.mainState}/>
            </div>
            <div className="col-sm-1">

            </div>
        </div>
    </div>
  )
}

export default MainCartForm