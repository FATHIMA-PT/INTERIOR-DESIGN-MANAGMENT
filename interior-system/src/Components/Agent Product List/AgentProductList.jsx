import React, { useEffect, useState } from "react";
import { Button, Card, Col, Form, Modal, Row } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";
import { getProductsApi } from "../Services/allApis";




function AgentProductList() {
  const token = localStorage.getItem("token");
  const [image, setImage] = useState(null);
  const [allProducts,setAllProducts]=useState(null)
  const [product, setProduct] = useState({
    name: "",
    description: "", // Add description field
    photo: "", // Add photo field
    price: "",
    catgory: "",
    propertytype: "",
  });
  console.log(product);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    setImage(file);
    setProduct((prevDetails) => ({
      ...prevDetails,
      photo: file,
    }));
  };

  const handleSubmit = async () => {

    try {
      // Create FormData object to handle file upload
      const formData = new FormData();
      formData.append("name", product.name);
      formData.append("description", product.description);
      formData.append("photo", product.photo);
      formData.append("price", product.price);
      formData.append("catgory", product.catgory);
      formData.append("propertytype", product.propertytype);

      // Make POST request to your API endpoint with FormData
      const response = await axios.post(
        "http://127.0.0.1:8000/agent-product-create/",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data", 
          }
        }
      );
      console.log(response);
      if (response.status === 201){
        console.log(response.data);
        Swal.fire({
          icon: "success",
          title: "Product Added ",
          showConfirmButton: false,
          timer: 1500
        });
        handleClose();
      }
    } catch (error) {
      console.error(error);
    }
  };




  // get products
  const getProducts=async()=>{

    const id= localStorage.getItem("agentId")
    const reqHeader={
      Authorization: `Bearer ${token}`
    }
   
    const response = await getProductsApi(id,reqHeader)
try {
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
        <div className="ms-5">
          <Button className="btn btn-primary" onClick={handleShow}>
            ADD
          </Button>
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
  
  
  
  
          
  
  
  
  
  
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            style={{ height: "600rem" }}
          >
            <Modal.Header closeButton>
              <Modal.Title>Add Products</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form className="border border-secondary p-3">
                <Form.Group className="mb-3" controlId="productName">
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Enter Product Name"
                    onChange={(e) =>
                      setProduct({ ...product, name: e.target.value })
                    }
                    value={product.name}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="productDescription">
                  <Form.Control
                    type="text"
                    name="description"
                    placeholder="Enter Product Description"
                    onChange={(e) =>
                      setProduct({ ...product, description: e.target.value })
                    }
                    value={product.description}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="productPhoto">
                  <Form.Control
                    type="file"
                    name="photo"
                    onChange={handleImageChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="productPrice">
                  <Form.Control
                    type="text"
                    name="price"
                    placeholder="Enter Product Price"
                    onChange={(e) =>
                      setProduct({ ...product, price: e.target.value })
                    }
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasictype">
                  <Form.Control
                    as="select"
                    name="category"
                    onChange={(e) =>
                      setProduct({ ...product, propertytype: e.target.value })
                    }
                    value={product.propertytype}
                  >
                    <option value="">Select Categories</option>
                    <option value="home">Home</option>
                    <option value="shop">Shop</option>
                    <option value="office">Shop</option>
  
                    {/* Add other user types as needed */}
                  </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasictype">
                  <Form.Control
                    as="select"
                    name="subcategory"
                    onChange={(e) =>
                      setProduct({ ...product, catgory: e.target.value })
                    }
                    value={product.catgory}
                  >
                    <option value="">Select Sub Categories</option>
                    <option value="kitchen">Kitchen</option>
                    <option value="diningroom">Dining Room</option>
                    <option value="bedroom">Bathroom</option>
                    <option value="reception"> Reception</option>
                    <option value="meetingroom">meeting Room</option>
                    <option value="bathroom">meeting Room</option>
                    <option value="pantry">meeting Room</option>
                    <option value="shoproom">meeting Room</option>
  
  
  
  
                    {/* Add other user types as needed */}
                  </Form.Control>
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                className="btn btn-danger me-4"
                onClick={handleClose}
              >
                Close
              </Button>
              <Button
                variant="primary"
                className="btn btn-warning"
                onClick={handleSubmit}
              >
                Upload
              </Button>
            </Modal.Footer>
          </Modal>
       
    
  </>
  );
}

export default AgentProductList;


