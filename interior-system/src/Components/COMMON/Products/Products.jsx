import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { productlistAPI } from "../../Services/allApis";
import { useCart, useWishlist } from "../../CONTEXT/context";
import  './Product.css'
import axios from "axios";

function Products({ data }) {

  const { addToCart } = useCart();
  const {addToWishlist} = useWishlist();
 
  const token = localStorage.getItem("token");
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const [product, setProduct] = useState([]);

  const handleProduct = async () => {
    console.log(token);
    const response = await productlistAPI(headers);
    console.log(response);
    setProduct(response.data);
  };
  useEffect(() => {
    handleProduct();
  }, []);

  const handleCart = async(id)=>{
    try {
     
    const response = await axios.post(`http://127.0.0.1:8000/AddToCart/${id}/1/`,{},{
      headers:{
        Authorization:`Bearer ${token}`
      }
    })
    if(response.status === 201){
      console.log(response);
      alert("Added to cart")
    }
    } catch (error) {

      console.log(error);
    }
    
  }

  const handleWishList = async(id)=>{
    console.log(id);
    try {
     
    const response = await axios.post(`http://127.0.0.1:8000/wishlist/add/${id}/`,{},{
      headers:{
        Authorization:`Bearer ${token}`
      }
    })
    if(response.status === 201){
      console.log(response);
      alert("Added to Wishlist")
    }
    } catch (error) {
      alert("Not Added")

      console.log(error);
    }
    
  }

  return (
    <>
      <div className="align-item-center justify-content-center mt-5 mb-5 d-flex">
        {product ? (
          product.map((i) => (
            <Card style={{ width: "22rem" }} className="ms-5 shadow p-2 cards-product">
              <Card.Img
                variant="top"
                src={i.photo}
                className="img img-fluid"
                style={{ height: "250px" }}
              />
              <Card.Body>
                <Card.Title className="text-center">{i.Name}</Card.Title>
                <Card.Text>
                  <h5 className="card-price mt-4">
                    Price:<span className="text-warning">${i.price}</span>
                  </h5>
                </Card.Text>
                <div className="d-flex justify-content-between ">
                  
                    <Button onClick={()=>handleWishList(i?.id)} className="btn  mt-auto btn-light">
                      <i
                        className="fa-solid fa-heart text-danger"
                        style={{ fontSize: "30px" }}
                      ></i>
                    </Button>
                  {" "}
                
                    <Button onClick={()=>handleCart(i?.id)} className="btn  mt-auto  btn-light">
                      <i
                        className="fa-solid fa-cart-plus text-success "
                        style={{ fontSize: "30px" }}
                      ></i>
                    </Button>
                 
                </div>
              </Card.Body>
            </Card>
          ))
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default Products;
