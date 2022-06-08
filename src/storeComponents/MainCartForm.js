import React from 'react'
import CartFormLogo from './CartFormLogo'
import CartForm from './CartForm'

const MainCartForm = (props) => {
  return (

    <div className='container pt-5 pb-5 p-sm-5 mt-0 mb-0'>
        {props.mainState.formMessage ?
          <p className='p-2 text-center rounded-3 mb-0' id='formMessage'>Your product has been added!</p>
          : <p className='p-2 mb-0' id='formMessage2'></p>
        }
        <div className="row justify-content-center m-0">
            <div className="col-sm-1">

            </div>
            <div className="col-sm-6 p-3 p-sm-5 pt-sm-2">
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