import React, { Component } from 'react';

import {styled} from 'styled-components';
import {Link} from 'react-router-dom';
import {ProductConsumer } from '../context';

import {
  Container,
  Row,
  Col,
  Card
} from 'react-bootstrap';


export default class Home extends Component {
  render() {
    return (
      <ProductConsumer >
        {(value)=>{
          const {products} = value;
          return(
          
             <Container fluid className="mt-5 pt-5" onClick={this.props.click}>
  






<Row inline  className="mt-5 p-0 " >
                
                  {value.products.map(product=>{
                    const {id,title,img,price} = product;
                    return(
                      
                      <Col sm="12" md="3" className="m-0 p-2 text-center ">
                     <Card key={id} className="" >
                        <img src={img} className="img-fluid "/>
                     </Card>
                     </Col>
                     
                    )
                  })}
                
                

              </Row>
              
             </Container>
           
          )

          
        }}
        
      </ProductConsumer>
    )
  }
}
