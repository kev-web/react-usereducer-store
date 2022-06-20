import React, { useState } from 'react'
import CartProductsLogo from './CartProductsLogo'
import CartProductCard from './CartProductCard'

const MainCartProducts = (props) => {
 
  const [ initialValue, setInitialValue ] = useState(0)
  const [ counterPagination, setCounterPagination ] = useState(6)
  const [currentPage, setCurrentPage] = useState(1)
  const [paginationBoolPrevious, setPaginationBoolPrevious] = useState(false)
  const [paginationBoolNext, setPaginationBoolNext] = useState(false)


  const handlePagination = (e) => {
    let btnValue = e.target.value
    let numberOfPages = Math.ceil(props.mainState.products.length / 6) 
    console.log(numberOfPages)
    if(btnValue === 'previous-btn'){
      if(currentPage === 1 && initialValue === 0){
        setInitialValue(0)
        setCurrentPage(1)
        setCounterPagination(counterPagination)
        setPaginationBoolPrevious(true)
        
      } else if(initialValue < 6){
          setInitialValue(0);
          setCounterPagination(6)
          setCurrentPage(1);
          setPaginationBoolPrevious(true)
      } else {
          setCounterPagination(counterPagination - 6)
          setInitialValue(initialValue - 6)
          setCurrentPage(currentPage - 1)
          setPaginationBoolPrevious(false)
          setPaginationBoolNext(false)
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          })
      }
    } 
    
    if(btnValue === 'next-btn'){
      if(counterPagination >= props.mainState.products.length){
        setInitialValue(initialValue);
        setCurrentPage(currentPage)
        setCounterPagination(counterPagination)
        setPaginationBoolNext(true)
        setPaginationBoolPrevious(false)
      } else {
        setCounterPagination(counterPagination + 6)
        setInitialValue(initialValue + 6)
        setCurrentPage(currentPage + 1)
        setPaginationBoolNext(false)
        setPaginationBoolPrevious(false)
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
      }
    }

    if(btnValue === 'go-start'){
      setInitialValue(0);
      setCounterPagination(6)
      setCurrentPage(1)
      setPaginationBoolNext(false)
      setPaginationBoolPrevious(true)
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }

    if(btnValue === 'go-end'){
      setInitialValue(props.mainState.products.length - 6)
      setCounterPagination(props.mainState.products.length)
      setPaginationBoolNext(true)
      setPaginationBoolPrevious(false)
      setCurrentPage(numberOfPages)
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }


  return (
    <div className="m-1 m-sm-0">
      <div className='container pt-5 pb-5 p-sm-5 mt-5 mb-5 text-center'>

          <div className='pt-0 pb-5' id='products-logo'>
              <CartProductsLogo textColor={'text-dark'}/>
          </div>
         
          <div className='p-0 pb-5'>
          {
            props.mainState.products.slice(initialValue, counterPagination).map(item => (
              <CartProductCard 
                    key={item.id} 
                    loopItem={item} 
                    addToCart={props.addToCart} 
                    removeFromCart={props.removeFromCart} 
                    currentState={props.mainState}
                    dispatchMethod={props.dispatchMethod}/>
            ))
          }
          </div>

          {/* {
            props.mainState.products.map(item => (
              <p className='mb-0 mt-0'>{props.mainState.products.indexOf(item)}-{item.name}</p>
            ))
          } */}

          
          <div className="btn-group" role='group'>
            <button type='button' className="btn btn-secondary" value={'go-start'} onClick={handlePagination}>Start</button>
            {
              paginationBoolPrevious ?
                <button type='button' className="btn pagination-btn" disabled onClick={handlePagination} value={'previous-btn'}>{'<<Prev'}</button>
              :
                <button type='button' className="btn pagination-btn" onClick={handlePagination} value={'previous-btn'}>{'<<Prev'}</button>
            }
            <p className='lead m-0 ps-3 pe-3 pt-1 pb-1'>{currentPage}</p>
            {
              paginationBoolNext ?
                <button type='button' className="btn pagination-btn" disabled onClick={handlePagination} value={'next-btn'}>{'Next>>'}</button>
              :
                <button type='button' className="btn pagination-btn" onClick={handlePagination} value={'next-btn'}>{'Next>>'}</button>
            }
            <button type='button' className="btn btn-secondary" value={'go-end'} onClick={handlePagination}>End</button>
          </div>
         
          {/* <div className="container mt-5 border p-3">
            <p>LENGTH OF PRODUCTS: {props.mainState.products.length}</p>
            <br />
            <p>INITIAL SLICE VALUE: {initialValue}</p>
            <br />
            <p>COUNTER PAGINATION: {counterPagination}</p>
          </div> */}
          
      </div>
      
    </div>
  )
}

export default MainCartProducts