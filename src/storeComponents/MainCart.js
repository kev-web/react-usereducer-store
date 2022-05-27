import React from 'react'
import CartDetailsLogo from './CartDetailsLogo'
import CartDetails from './CartDetails'

const MainCart = (props) => {
  return (

    <div className="m-0 p-0">
      <div className='container p-0 pt-5 pb-5 p-sm-5 mt-5 mb-5'>
        <div className="row m-0">
          <div className="col-0 col-sm-2">
          
          </div>
          <div className="col-sm-8">
            <div className="container p-3 w-25 mb-3">
              <CartDetailsLogo 
                displaySize={'display-3'} 
                alignText={'text-center'}
                badgeTextColor={'text-light'} 
                circlePadding={'p-2'} 
                fontSize={20} 
                pillColorBg={'bg-danger'} 
                actualState={props.actualState}/>
            </div>
            <table className="table table-borderless">
                <thead className='border-top'>
                    <tr className='text-center align-middle' style={{height: 60}} id='tableHead'>
                        <th scope="col" style={{width: "25%"}}><h5>ITEM</h5></th>
                        <th scope='col' style={{width: "12%"}} className='d-none d-md-block'>&nbsp;</th>
                        <th scope="col" style={{width: "20%"}}><h5>QTY</h5></th>
                        <th scope="col" style={{width: "21%"}}><h5>PRICE</h5></th>
                        <th scope="col" style={{width: "22%"}}><h5>SUBT</h5></th>
                    </tr>
                </thead>
                <CartDetails 
                actualState={props.actualState} 
                addItemToCart={props.addItemToCart} 
                removeItemFromCart={props.removeItemFromCart} 
                dispatchMethod={props.dispatchMethod}/>
            </table>
          </div>
          <div className="col-0 col-sm-2">

          </div>
        </div>
      </div>
    </div>
    
  )
}

export default MainCart