import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { productlistAPI } from "../../Services/allApis";


function Products() {
 
  const token = localStorage.getItem("token")
  const headers = {
    Authorization: `Bearer ${token}`
  }

  const [product,setProduct]=useState()

  const handleProduct = async () => {
    console.log(token)
      const response = await productlistAPI(headers)
      console.log(response);
      setProduct(response.data)
  };
  useEffect(() => {
    handleProduct()
  }, [])



  return (
    <>

      <div className="align-item-center justify-content-center mt-5 mb-5 d-flex">
       {product?product.map(i=>( <Card style={{ width: '22rem' }} className="ms-5 shadow p-2">
          <Card.Img variant="top" src={i.photo} className="img img-fluid" style={{height:'250px'}}/>
          <Card.Body>
            <Card.Title className="text-center">{i.Name}</Card.Title>
            <Card.Text>
              <h5 className="card-price mt-4">Price:<span className="text-warning">${i.price}</span></h5>

            </Card.Text>
            <div className="d-flex justify-content-between ">
              <Button className="btn  mt-auto bg-light" ><i className="fa-solid fa-heart text-danger" style={{ fontSize: "30px" }}></i></Button>
              <Link to={'/cart'}>
                <Button className="btn  mt-auto  bg-light" ><i className="fa-solid fa-cart-plus text-success " style={{ fontSize: "30px" }}></i></Button>
              </Link>
            </div>
          </Card.Body>
        </Card>)):<></>}
      </div>



    </>
  )
}

export default Products
