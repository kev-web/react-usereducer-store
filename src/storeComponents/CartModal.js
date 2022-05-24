import React, {useState, useEffect} from 'react'


const CartModal = (props) => {

    //useState hook:
    const [inputName, setInputName] = useState(props.actualState.modalObject.productName);
    const [inputDescription, setInputDescription] = useState(props.actualState.modalObject.productDescription)
    const [inputPrice, setInputPrice] = useState(props.actualState.modalObject.productPrice)
   
    const handleModalSubmitForm = (e) => {
        e.preventDefault()
        console.log('sending object to be edited...')
        console.log(e.target.editName.value);
        console.log(e.target.editDescription.value);
        console.log(e.target.editPrice.value);
        let editedObject = {
            product_modal_id: props.actualState.modalObject.productId,
            product_modal_name: e.target.editName.value,
            product_modal_description: e.target.editDescription.value,
            product_modal_price: e.target.editPrice.value,
            product_modal_pic: props.actualState.modalObject.productPic,
            product_modal_addedToCart: props.actualState.modalObject.productAddedToCart
        }
        props.dispatchMethod({
            type: 'save-item',
            payload: editedObject
        })
        
    }

    useEffect(()=>{
        console.log('cartmodal useffect...')
        setInputName(props.actualState.modalObject.productName)
        setInputDescription(props.actualState.modalObject.productDescription)
        setInputPrice(props.actualState.modalObject.productPrice)
    }, [props.actualState.modalObject])


    return (
    <div className="modal fade" tabIndex={"-1"} id='editProductModal'>
        <div className="modal-dialog">
            <div className="modal-content modalGlass">
                <div className="modal-header p-2">
                    <h4 className='modal-title mx-auto beigeTextColor'>{props.actualState.modalObject.productName}</h4>
                    <img src={props.actualState.modalObject.productPic} width={"25%"} alt='product-image'/>
                    <button type='button' className="btn-close bg-light me-2" data-bs-dismiss='modal'></button>
                </div>
                <p className='mx-auto mt-2 text-muted'>Id:&nbsp;{props.actualState.modalObject.productId}</p>

                <form onSubmit={handleModalSubmitForm}>
                    <div className="modal-body">
                        <label htmlFor="editProductName" className="form-label mt-2 beigeTextColor">Product Name:</label>
                        <input name='editName' type="text" className="form-control" id='editProductName' value={inputName} onChange={(e)=>setInputName(e.target.value)}/>
                        
                        <label htmlFor="editProductDescription" className="form-label mt-2 beigeTextColor">Description:</label>
                        <textarea name="editDescription" className='form-control' id="editProductDescription" value={inputDescription} onChange={(e)=>setInputDescription(e.target.value)}  cols="30" rows="5"></textarea>
                        
                        <label htmlFor="editProductPrice" className="form-label mt-2 beigeTextColor">Price:</label>
                        <input name='editPrice' type='number' className="form-control" id='editProductPrice' value={inputPrice} onChange={(e)=>setInputPrice(e.target.value)} step="0.01" min="0"/>
                    </div>
                    <div className="modal-footer">
                        <button type='button' className="btn btn-outline-danger" data-bs-dismiss='modal'>Cancel</button>
                        <button type='submit' className="btn btn-success" data-bs-dismiss='modal'>Save</button>
                    </div>
                </form>


            </div>
        </div>
    </div>
  )
}

export default CartModal