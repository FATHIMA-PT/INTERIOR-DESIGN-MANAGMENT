import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { getProductsApi } from './Services/allApis';



function ViewAgentProductList() {
    const token = localStorage.getItem("token");
    const [allProducts,setAllProducts]=useState([])
  
    // get products
    const getProducts=async()=>{
  
      const id= localStorage.getItem("agentId")
      const reqHeader={
        Authorization: `Bearer ${token}`
      }
      try {
      const response = await getProductsApi(id,reqHeader)
  
      setAllProducts(response.data)
      console.log(response);
    
  } catch (error) {
    console.log(error);
  }
  
    
    }
  
    useEffect(()=>{
      getProducts()
    },[])
  
    return (
    <>
        <div className="align-items-center justify-content-center d-flex mt-5 mb-5">
          <div className="d-flex w-50 align-items-center border rounded">
            <input
              type="text"
              placeholder="Search By Products"
              className="form-control"
            />
            <div style={{ marginLeft: "-50px" }}>
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
         
            </div>
    <div className="m-5 ">
    <Row>
    {allProducts && allProducts.length > 0 ? (
      allProducts.map((product) => (
        <Col key={product.id} lg={3}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={product?.photo} />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>
                &#x20B9; {product.price}
              </Card.Text>
              <Button variant="primary">Book Now</Button>
            </Card.Body>
          </Card>
        </Col>
      ))
    ) : (
      <></>
    )}
  </Row>
    </div>
    
      
      
    </>
    );
  }

export default ViewAgentProductList