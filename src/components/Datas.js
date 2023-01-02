import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Datas = ({data, index, deleteData}) => {
  return (
    <>
    
        <tr>{ index+1 }
            <td>{ data.productID }</td>
            <td>{ data.productName }</td>
            <td>{ data.amount }</td>
            <td>{ data.customerName }</td>
            <td>{ data.status }</td>
            <td>{ data.transactionDate }</td>
            <td>{ data.createBy }</td>
            <td>{ data.createOn }</td>
            <td>
              <Button as={Link} to={`/data/editData/${data.id}`} variant="warning" className='m-3'>Edit</Button>
              <Button onClick={()=>deleteData(data.id)} variant="danger"className='m-3'>Delete</Button>
            </td>
        </tr>  

    </>
  )
}

export default Datas