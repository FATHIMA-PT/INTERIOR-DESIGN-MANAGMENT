import React from "react";
import { Button , Card} from "react-bootstrap";

import { Link } from "react-router-dom";


function Wishlist() {
  return (
    <div style={{ marginRight: "100px" }}>
      {/* wishlist without items */}
      <div
        className="d-flex justify-content-center align-items-center w-100"
        style={{ height: "100vh" }}
      >
        <img
          className="img img-fluid"
          src="https://www.gospeedy.co.in/images/empty.gif"
          alt=""
        />
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div className="text-center">
            <h1 className="text-danger">Your Wishlist is Empty!!!</h1>
            <Link to={"/products"}>
              <a className="btn btn-success">Add More Items</a>
            </Link>{" "}
          </div>
        </div>
      </div>

      {/* wishlist with items */}
      
      <div className="align-item-center justify-content-center mt-5 mb-5 d-flex">
      <Card style={{ width: '22rem' }} className='border rounded shadow'>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <div className="d-flex justify-content-between ">
              <Link to={'/cart'}>
                <Button className="btn  mt-auto  btn-light" ><i className="fa-solid fa-cart-plus text-success " style={{ fontSize: "30px" }}></i></Button>
              </Link>
              <Button className="btn  mt-auto btn-light" ><i className="fa-solid fa-trash text-danger" style={{ fontSize: "30px" }}></i></Button>

          </div>
      </Card.Body>
    </Card>
     </div>
    </div>
  );
}

export default Wishlist;
