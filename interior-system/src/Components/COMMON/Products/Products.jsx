import React from "react";
import {Button, Card } from "react-bootstrap";


function Products() {
  return (
    <>
    <div className=' align-items-center justify-content-center'>
        <h2 className="text-danger fw-bolder text-center mt-5"> Products For Sale</h2>
          <div className="container justify-content-around mt-5">
             <div className="row">
                <div className="col-4 mb-5">
                <Card className="" style={{height:'575px'}}>
                  <Card.Img
                    variant="top"
                    className="img img-fluid rounded p-3"
                    style={{ height: "265px" }}
                    src="https://images.pexels.com/photos/3575827/pexels-photo-3575827.jpeg"
                  />
                  <Card.Body style={{textAlign:"justify"}} >
                    <Card.Title className="text-center fw-bolder fs-5">
                      Wall Tile
                      <h5 className="mt-3" style={{textAlign:"justify"}}><span className="text-success">Description </span>: Transform your walls into a masterpiece with our stunning collection of wall tiles at Interior Harmoney.</h5>
                      <p className="mt-3  " style={{textAlign:"justify"}}>
                        <span className="text-success">Price</span> : $50 per Piece
                      </p>
                    </Card.Title>
                    
                <div className="text-center mt-4">
                <Button  className="btn btn-outline-danger text-light ">BUY</Button>
                </div>    
                 </Card.Body>
                </Card>
                </div>
             </div>
          </div>

    </div>
      
    </>
  )
}

export default Products
