import React, { useEffect, useState } from "react";
import { Button , Card} from "react-bootstrap";

import { Link } from "react-router-dom";
import {  useWishlist } from "../CONTEXT/context";
import { wishListApi } from "../Services/allApis";


function Wishlist() {
  const [wishlistItems, setWishlistItems] = useState([]);
  const { wishlist, removeFromWishlist  } = useWishlist();
  
  const token = localStorage.getItem("token");
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const handleWishlist = async () => {
    const response = await wishListApi(headers);
    setWishlistItems(response.data);
    console.log(response);
  };
  // console.log(cartList);

  const handleRemoveFromWishlist = (index) => {
    removeFromWishlist(index);
  };
  
  useEffect(() => {
    handleWishlist();
  }, []);

  return (
    <div style={{ marginRight: "100px" }}>
    {/* Conditionally render based on whether wishlistItems is empty */}
    {wishlistItems ? (
      <div className="d-flex justify-content-center align-items-center w-100" style={{ height: "100vh" }}>
        <img className="img img-fluid" src="https://www.gospeedy.co.in/images/empty.gif" alt="" />
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div className="text-center">
            <h1 className="text-danger">Your Wishlist is Empty!!!</h1>
            <Link to={"/products"}>
              <a className="btn btn-success">Add More Items</a>
            </Link>{" "}
          </div>
        </div>
      </div>
    ) : (
      <div className="align-item-center justify-content-center mt-5 mb-5 d-flex">
        {/* Render wishlist items */}
        {wishlistItems.map((item, index) => (
          <Card key={index} style={{ width: '22rem' }} className='border rounded shadow'>
            <Card.Img variant="top" src={item.image} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.description}</Card.Text>
              <div className="d-flex justify-content-between ">
                <Link to={'/cart'}>
                  <Button className="btn  mt-auto  btn-light" ><i className="fa-solid fa-cart-plus text-success " style={{ fontSize: "30px" }}></i></Button>
                </Link>
                {/* Pass index to handleRemoveFromWishlist */}
                <Button onClick={()=>handleRemoveFromWishlist(index)} className="btn  mt-auto btn-light" ><i className="fa-solid fa-trash text-danger" style={{ fontSize: "30px" }}></i></Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    )}
  </div>
);
}

export default Wishlist;
