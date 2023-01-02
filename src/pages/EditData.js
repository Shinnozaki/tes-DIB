import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios';

const EditData = () => {

    const [productID, setProductID] = useState('');
    const [productName, setProductName] = useState('');
    const [amount, setAmount] = useState('');
    const [customerName, setCustomerName] = useState('');
    const [status, setStatus] = useState('');
    const [transactionDate, setTransactionDate] = useState('');
    const [createBy, setCreateBy] = useState('');
    const [createOn, setCreateOn] = useState('');

    const navigate = useNavigate();

    const {id} = useParams();

    useEffect(() => {
        getDataById();
    }, []);

    const getDataById = async()=>{
        await axios.get(`http://localhost:3004/data/${id}`)
        .then((res)=>{
            setProductID(res.data.productID);
            setProductName(res.data.productName);
            setAmount(res.data.amount);
            setCustomerName(res.data.customerName);
            setStatus(res.data.status);
            setTransactionDate(res.data.transactionDate);
            setCreateBy(res.data.createBy);
            setCreateOn(res.data.createOn);
        });

    
    };

    const updateData = async(e)=>{
        e.preventDefault();
        console.log("tes");
        
        await axios.patch(`http://localhost:3004/data/${id}`,
        {
            productID: productID,
            productName: productName,
            amount: amount,
            customerName: customerName,
            status: status,
            transactionDate: transactionDate,
            createBy: createBy,
            createOn: createOn
            
        }).then(()=>{
            navigate('/')
        }).catch((error=>{
            console.log(error);
        }))
    }
    

  return (
    <>
        <div className="container">
        <div className="row justify-content-center align-items-center inner-row">
            <div className="col-md-5">
                <div className="form-box w-100 p-4 d-flex flex-column justify-content-center">

                    <div className="form-title">
                        <h2 className="fw-2 mb-5">Edit Data</h2>
                    </div>

                    <form name="editData" onSubmit={updateData}>
                
                        <div className="form-floating mb-3">
                            <input type="text"className="form-control form-control-sm" value={productID} onChange={(e)=>setProductID(e.target.value)} placeholder="Product ID" name="productID"/>
                            <label htmlFor="floatingInput">Product ID</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text" value={productName} onChange={(e)=>setProductName(e.target.value)} className="form-control form-control-sm" placeholder="Product Name" name="productName"/>
                            <label htmlFor="floatingInput">Product Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text" value={amount} onChange={(e)=>setAmount(e.target.value)} className="form-control form-control-sm" placeholder="Amount" name="amount"/>
                            <label htmlFor="floatingInput">Amount</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text" value={customerName} onChange={(e)=>setCustomerName(e.target.value)} className="form-control form-control-sm" placeholder="Customer Name" name="customerName"/>
                            <label htmlFor="floatingInput">Customer Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text" value={status} onChange={(e)=>setStatus(e.target.value)} className="form-control form-control-sm" placeholder="Status" name="status"/>
                            <label htmlFor="floatingInput">Status</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text" value={transactionDate} onChange={(e)=>setTransactionDate(e.target.value)} className="form-control form-control-sm" placeholder="Transaction Date" name="transactionDate"/>
                            <label htmlFor="floatingInput">Transaction Date</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text" value={createBy} onChange={(e)=>setCreateBy(e.target.value)} className="form-control form-control-sm" placeholder="Created By" name="createBy"/>
                            <label htmlFor="floatingInput">Created by</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text" value={createOn} onChange={(e)=>setCreateOn(e.target.value)} className="form-control form-control-sm" placeholder="Created On" name="createOn"/>
                            <label htmlFor="floatingInput">Created On</label>
                        </div>
                        
                        <div className="mt-3">
                            <button variant="success" className="mb-3" type="submit">Edit Data</button>
                        </div>

                    </form>

                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default EditData
