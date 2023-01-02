import React, { Component } from 'react'
import {API_URL} from '../utils/constants'
import {Row, Col, Card, Table, Button} from 'react-bootstrap'
import Datas from '../components/Datas'
import {Link} from 'react-router-dom'
import axios from 'axios'

export default class Home extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       datas:[]
    }
  }
  
  componentDidMount() {
    fetch(API_URL+"data")
        .then((res) => res.json())
        .then((json) => {
            this.setState({
                datas: json
            });
        })
        .catch(error => {
          console.log(error);
        })
}

  deleteData = async(id) =>{
    await axios.delete(API_URL+"data/"+id)
    this.componentDidMount();
  }

  render() {
    const {datas} = this.state;
    return (
      <div className="App">
        
        <div className="mt-3">
            <Row>
                <Col md="{6}">
                <Card className="border-0 rounded shadow-sm">
                        <Card.Body>
                        <Button as={Link} to="/addData" variant="success" className="mb-3" size="lg">Add Data</Button>
                            <Table striped bordered hover className="mb-1">
                                <thead>
                                    <tr>
                                        <th>NO.</th>
                                        <th>Product ID</th>
                                        <th>Product Name</th>
                                        <th>Amount</th>
                                        <th>Customer Name</th>
                                        <th>Status</th>                 
                                        <th>Transaction Date</th>  
                                        <th>Created By</th>
                                        <th>CreateOn</th>    
                                        <th>Action</th>                      
                                    </tr>
                                </thead>
                                <tbody>
                                    {datas && datas.map((data, index) => (
                                        <Datas key={data.id} data={data} index={index} deleteData={this.deleteData}/>
                                    )) }
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
      </div>
    )
  }
}
