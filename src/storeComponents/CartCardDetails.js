import React from 'react'

const CartCardDetails = () => {
  return (
    <div className='container mt-5 mb-5'>
        <div className="row align-items-center m-0">
            <div className="col-sm-6 p-0">
                <img src="https://source.unsplash.com/random/800x800/?$car,city" className='img-fluid' alt="product-details-image" />
            </div>
            <div className="col-sm-6 p-2 mt-3 mt-sm-0 p-sm-5">
                <h1 className='display-3 mb-2 mb-sm-5'>Product Name</h1>
                <p className='text-muted text-end mb-4'>ID: 123hgj12h35h3kj41lk2j3</p>
                <p className='mb-4 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, minus non, quis aut iure ab cumque 
                                    tempore enim quas vero illum dignissimos asperiores! Labore quam aliquid earum aut magni consequatur.</p>
                <p className='fs-4 fst-italic'>Quantity in Cart: 8</p>
                <p className='fs-2 text-end mb-5 fw-bold'>$ 14.99</p>
                <div className="p-0 text-center text-sm-end">
                    <button className='btn btn-outline-danger mb-3 mb-sm-0 me-2 me-sm-3'>Remove from Cart</button>
                    <button className="btn btn-primary mb-3 mb-sm-0">Add To Cart</button>
                </div>
            </div>
        </div>
        <div className="row m-0">
            <div className="col-sm-6 p-0">
                <img src="https://source.unsplash.com/random/800x800/?$vehicle,beach" className='img-fluid' alt="product-details-image" />
            </div>
            <div className="col-sm-6 p-0">
                <img src="https://source.unsplash.com/random/800x800/?$store,blue" className='img-fluid' alt="product-details-image" />
            </div>
        </div>
        
    </div>
  )
}

export default CartCardDetails