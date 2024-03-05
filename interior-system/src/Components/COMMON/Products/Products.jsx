import React from "react";
import chair from '../../../Assets/chairs.jpg'
// import door from '../../../Assets/door.jpg'
// import pairChair from '../../../Assets/vintage chairs.jpg'
// import tile from '../../../Assets/tile.jpg'

import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";


function Products() {
  
  return (
    <>
     <div className="align-item-center justify-content-center mt-5 mb-5">
        <Card style={{ width: '18rem' }} className="ms-5 shadow p-2">
        <Card.Img variant="top" src={chair} className="img img-fluid" />
        <Card.Body>
          <Card.Title className="text-center">CHAIR</Card.Title>
          <Card.Text>
          <h5 className="card-price mt-4">Price:<span className="text-warning">$2000</span></h5>

          </Card.Text>
         <div className="d-flex justify-content-between "> 
          <Button className="btn  mt-auto bg-light" ><i className="fa-solid fa-heart text-danger" style={{fontSize:"30px"}}></i></Button>
         <Link to={'/cart'}>
            <Button className="btn  mt-auto  bg-light" ><i className="fa-solid fa-cart-plus text-success " style={{fontSize:"30px"}}></i></Button>
         </Link>
          </div>
        </Card.Body>
      </Card>
     </div>
             
 
      
    </>
  )
}

export default Products
