import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";

import { Link } from "react-router-dom";
import { useCart, useWishlist } from "../CONTEXT/context";
import { wishListApi, wishListDeleteApi } from "../Services/allApis";
import axios from "axios";

// import { wishListApi } from "../Services/allApis";
// import axios from "axios";

function Wishlist() {
  const [wishlistview, setwishlistview] = useState(null);
  const { removeFromWishlist } = useCart();

  // const [wishlistItems, setWishlistItems] = useState([]);
  // const { wishlist, removeFromWishlist  } = useWishlist();

  const token = localStorage.getItem("token");
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  useEffect(() => {
    handleAddWishList();
  }, []);

  const handleAddWishList = async () => {
    try {
      const response = await wishListApi(headers);
     
        setwishlistview(response.data);
        console.log(response.data);
      
    } catch (error) {
      console.log(error);
    }
  };

  const handleRemoveFromWishList = async (itemId) => {
    try {
      const response = await axios.delete(
        `http://127.0.0.1:8000/wishlist/remove/${itemId}/`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 204) {
        alert("Item Deleted");
        handleAddWishList();
      }
    } catch (error) {
      console.error("Error removing item from WishList:", error);
    }
  };

  // const handleRemoveFromWishlist = (index) => {
  //   removeFromWishlist(index);
  // };

  if (wishlistview === null) return <></>;

  return (
    <div style={{ marginRight: "100px" }}>
      {/* Conditionally render based on whether wishlistItems is empty */}
      {wishlistview === null ? (
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
      ) : (
        <div className="align-item-center justify-content-center mt-5 mb-5 d-flex">
          {/* Render wishlist items */}
          {wishlistview.map((item, index) => (
            <Card
              key={index}
              style={{ width: "22rem" }}
              className="border rounded shadow"
            >
              <Card.Img
                variant="top"
                src={item.product.photo}
                style={{ height: "200px" }}
              />
              <Card.Body>
                <Card.Title>{item.product.Name}</Card.Title>
                <Card.Text>{item.product.price}</Card.Text>
                <div className="d-flex justify-content-between ">
                  <Link to={"/cart"}>
                    <Button className="btn  mt-auto  btn-light">
                      <i
                        className="fa-solid fa-cart-plus text-success "
                        style={{ fontSize: "30px" }}
                      ></i>
                    </Button>
                  </Link>
                  {/* Pass index to handleRemoveFromWishlist */}
                  <Button
                    onClick={() =>{ handleRemoveFromWishList(item?.product?.id)}}
                    className="btn  mt-auto btn-light"
                  >
                    <i
                      className="fa-solid fa-trash text-danger"
                      style={{ fontSize: "30px" }}
                    ></i>
                  </Button>
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
