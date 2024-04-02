import React, { useEffect, useState } from "react";
import { Button, Card, Col, Form, Modal, Row } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";
import { getProductsApi } from "../Services/allApis";

function AgentProductList() {
  const token = localStorage.getItem("token");
  const [image, setImage] = useState(null);
  const [allProducts, setAllProducts] = useState(null);
  const [product, setProduct] = useState({
    name: "",
    description: "",
    photo: "",
    price: "",
    catgory: "",
    propertytype: "",
  });
  const [show, setShow] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

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
      const formData = new FormData();
      formData.append("name", product.name);
      formData.append("description", product.description);
      formData.append("photo", product.photo);
      formData.append("price", product.price);
      formData.append("catgory", product.catgory);
      formData.append("propertytype", product.propertytype);

      const response = await axios.post(
        "http://127.0.0.1:8000/agent-product-create/",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.status === 201) {
        Swal.fire({
          icon: "success",
          title: "Product Added",
          showConfirmButton: false,
          timer: 1500,
        });
        handleClose();
        getProducts();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getProducts = async () => {
    const id = localStorage.getItem("agentId");
    const reqHeader = {
      Authorization: `Bearer ${token}`,
    };

    try {
      const response = await getProductsApi(id, reqHeader);
      setAllProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  // Function to handle search input change
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter products based on search term
  const filteredProducts = allProducts
    ? allProducts.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  return (
    <>
      <div className="align-items-center justify-content-center d-flex mt-5 mb-5">
        <div className="d-flex w-50 align-items-center border rounded">
          <input
            type="text"
            placeholder="Search By Products"
            className="form-control"
            value={searchTerm}
            onChange={handleSearchChange}
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
          {filteredProducts.map((product) => (
            <Col key={product.id} lg={3}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={product?.photo} style={{ height: '250px' }} />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>
                    &#x20B9; {product.price}
                  </Card.Text>
                  <Button variant="primary">Book Now</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
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
            {/* Form inputs */}
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