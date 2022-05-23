import React from 'react'
import CartDetailsLogo from './CartDetailsLogo'
import CartDetails from './CartDetails'

const MainCart = (props) => {
  return (
    <div className='container pt-5 pb-5 p-sm-5 mt-5 mb-5 modalGlass'>
      <div className="row">
        <div className="col-sm-2">
        
        </div>
        <div className="col-sm-8">
          <div className="container p-3 w-25 mb-3">
            <CartDetailsLogo actualState={props.actualState}/>
          </div>
          <table className="table table-borderless">
              <thead className='border-bottom border-top'>
                  <tr className='text-center align-middle' style={{height: 60}} id='tableHead'>
                      <th scope="col" style={{width: "25%"}}><h5>Item</h5></th>
                      <th scope='col' style={{width: "12%"}}>&nbsp;</th>
                      <th scope="col" style={{width: "17%"}}><h5>Qty</h5></th>
                      <th scope="col" style={{width: "23%"}}><h5>Price</h5></th>
                      <th scope="col" style={{width: "23%"}}><h5>SubT</h5></th>
                  </tr>
              </thead>
              <CartDetails 
              actualState={props.actualState} 
              addItemToCart={props.addItemToCart} 
              removeItemFromCart={props.removeItemFromCart} 
              dispatchMethod={props.dispatchMethod}/>
          </table>
        </div>
        <div className="col-sm-2">

        </div>
      </div>


      





      
    </div>
  )
}

export default MainCart