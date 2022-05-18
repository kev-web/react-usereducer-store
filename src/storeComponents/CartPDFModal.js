import React, {useEffect, useState} from 'react'



const CartPDFModal = (props) => {

    const [inputCashAmount, setInputCashAmount] = useState(false);
    const [paymentSelection, setPaymentSelection] = useState('');

    const enableCashInput = () => {
        if(paymentSelection === 'Card' || paymentSelection === 'Wire'){
            setInputCashAmount(false);
        } else {
            setInputCashAmount(true);
        }
    }

    const handleExportPdfData = (e) => {
        e.preventDefault()
        console.log('form submitted...')
        let customerInputName = e.target.customerFullName.value;
        let customerInputPhone = e.target.customerPhoneNumber.value;
        let customerInputCity = e.target.customerHomeCity.value;
        let customerInputPayment = e.target.customerPreferredPayment.value;
        let customerInputCash = e.target.customerCash.value;
        let customerInputDelivery = e.target.customerPreferredDelivery.value;
        let customerInputComments = e.target.customerComments.value;
        props.customerDataSent(customerInputName, customerInputPhone, customerInputCity, customerInputPayment, customerInputCash, customerInputDelivery, customerInputComments)

    } 

    useEffect(()=>{
        'PDFGenerator useEffect triggered...'
        enableCashInput();
    }, [paymentSelection])


  return (
    <div className="modal fade" tabIndex={"-1"} id='pdfModal'>
        <div className="modal-dialog">
            <div className="modal-content modalGlass">
                <div className="modal-header p-4">
                    <div className='modal-title mx-auto'>
                        <h2><i className="bi bi-filetype-pdf text-success display-3"></i>&nbsp;Total: ${props.currentState.totalToPay}</h2>
                    </div>
                    <button type='button' className="btn-close bg-light me-2" data-bs-dismiss='modal'></button>
                </div>

                <form onSubmit={handleExportPdfData} >
                    <div className="modal-body">
                        <label htmlFor="customerName" className="form-label mt-3">Customer Name:</label>
                        <input name='customerFullName' type="text" className="form-control" id='customerName'/>
                        
                        <label htmlFor="customerPhone" className="form-label mt-3">Phone Number:</label>
                        <input name="customerPhoneNumber" type='tel' className='form-control' id="customerPhone"/>
                        
                        <label htmlFor="customerCity" className="form-label mt-3">City:</label>
                        <input name='customerHomeCity' type='text' className="form-control" id='customerCity'/>

                        <label htmlFor="customerPaymentType" className="form-label mt-3">Payment Method:</label>
                        <select 
                            name="customerPreferredPayment" 
                            className='form-select' 
                            id="customerPaymentType" 
                            onChange={(e)=> {
                                setPaymentSelection(e.target.value)
                                
                            }}
                            >
                                <option value="Cash" className='text-dark'>Cash</option>
                                <option value="Card" className='text-dark'>Credit Card</option>
                                <option value="Wire" className='text-dark'>Online Wire Transfer</option>
                        </select>

                        {inputCashAmount ? ( 
                            <div>
                                <label htmlFor="customerInputCashHanded" className="form-label mt-3">Cash Handed ($):</label>
                                <input name='customerCash' type="number" className="form-control" id='customerInputCashHanded'/>
                            </div>
                            ) : (
                                ''
                            )
                        }

                        <label htmlFor="customerDeliveryType" className="form-label mt-3">Delivery Method:</label>
                        <select name="customerPreferredDelivery" className="form-select" id="customerDeliveryType">
                            <option value="Pickup" className="text-dark">Store Pickup</option>
                            <option value="Delivery" className="text-dark">Delivery to Address</option>
                        </select>

                        <label htmlFor="customerCommentsBox" className="form-label mt-3">Comments:</label>
                        <textarea name="customerComments" className='form-control' id="customerCommentsBox" cols="30" rows="5" maxLength="250"></textarea>
                    </div>
                    <div className="modal-footer">
                        <button type='button' className="btn btn-outline-danger" data-bs-dismiss='modal'>Cancel</button>
                        <button type='submit' className="btn btn-success" data-bs-dismiss='modal'>Export PDF</button>
                    </div>
                </form>


            </div>
        </div>
    </div>
  )
}

export default CartPDFModal