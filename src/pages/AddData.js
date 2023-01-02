import React from 'react'
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../utils/constants';

const AddData = () => {
    const submitHandler = (event)=>{
        event.preventDefault();
        const productID = event.target.productID.value;
        const productName = event.target.productName.value;
        const amount = event.target.amount.value;
        const customerName = event.target.customerName.value;
        const status = event.target.status.value;
        const transactionDate = event.target.transactionDate.value;
        const createdBy = event.target.createdBy.value;
        const createdOn = event.target.createdOn.value;

        fetch(API_URL+"data", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({productID, productName, amount, customerName, status, transactionDate, createdBy, createdOn})
        }).then((res) => {
            return res.json()
        })
        .then(data=> console.log(data))
        .catch((error)=>{
            console.log(error);
        });

        navigate("/");
    }   
    const navigate = useNavigate();
    

      

  return (
    <>
        <div className="container">
        <div className="row justify-content-center align-items-center inner-row">
            <div className="col-md-5">
                <div className="form-box w-100 p-4 d-flex flex-column justify-content-center">

                    <div className="form-title">
                        <h2 className="fw-2 mb-5">Add Data</h2>
                    </div>

                    <form name="addData" onSubmit={submitHandler}>
                
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control form-control-sm" placeholder="Product ID" name="productID"/>
                            <label htmlFor="floatingInput">Product ID</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control form-control-sm" placeholder="Product Name" name="productName"/>
                            <label htmlFor="floatingInput">Product Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control form-control-sm" placeholder="Amount" name="amount"/>
                            <label htmlFor="floatingInput">Amount</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control form-control-sm" placeholder="Customer Name" name="customerName"/>
                            <label htmlFor="floatingInput">Customer Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control form-control-sm" placeholder="Status" name="status"/>
                            <label htmlFor="floatingInput">Status</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control form-control-sm" placeholder="Transaction Date" name="transactionDate"/>
                            <label htmlFor="floatingInput">Transaction Date</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control form-control-sm" placeholder="Created By" name="createdBy"/>
                            <label htmlFor="floatingInput">Created by</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control form-control-sm" placeholder="Created On" name="createdOn"/>
                            <label htmlFor="floatingInput">Created On</label>
                        </div>
                        
                        <div className="mt-3">
                            <button variant="success" className="mb-3" type="submit" style={{}}>Add Data</button>
                        </div>

                    </form>

                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default AddData
