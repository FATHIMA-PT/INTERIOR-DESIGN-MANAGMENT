import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import axios from 'axios';

function AgentProductList() {
  const [product, setProduct] = useState({
    name: "",
    description: "", // Add description field
    photo: null, // Add photo field
    price: ""
  });
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    // If the target is a file input, set the photo field
    if (name === "photo") {
      setProduct(prevState => ({
        ...prevState,
        photo: files[0] // Use the first file from the files array
      }));
    } else {
      setProduct(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  const handleSubmit = async () => {
    try {
      // Create FormData object to handle file upload
      const formData = new FormData();
      formData.append('name', product.name);
      formData.append('description', product.description);
      formData.append('photo', product.photo);
      formData.append('price', product.price);
      
      // Make POST request to your API endpoint with FormData
      const response = await axios.post('http://127.0.0.1:8000/agent-product-create/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response.data);
      handleClose();
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <div className='align-items-center justify-content-center d-flex mt-5 mb-5'>
      <div className='d-flex w-50 align-items-center border rounded'>
        <input type="text" placeholder='Search By Products' className='form-control' />
        <div style={{ marginLeft: '-50px' }}><i className='fa-solid fa-magnifying-glass'></i>
        </div>
      </div>
      <div className='ms-5'>
        <Button className='btn btn-primary' onClick={handleShow}>ADD</Button>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          style={{ height: '600rem' }}
        >
          <Modal.Header closeButton>
            <Modal.Title>Add Products</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form className='border border-secondary p-3'>
              <Form.Group className="mb-3" controlId="productName">
                <Form.Control type="text" name="name" placeholder="Enter Product Name" onChange={handleChange} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="productDescription">
                <Form.Control type="text" name="description" placeholder="Enter Product Description" onChange={handleChange} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="productPhoto">
                <Form.Control type="file" name="photo" onChange={handleChange} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="productPrice">
                <Form.Control type="text" name="price" placeholder="Enter Product Price" onChange={handleChange} />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" className='btn btn-danger me-4' onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" className='btn btn-warning' onClick={handleSubmit}>Upload</Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default AgentProductList;




// import React, { useState } from 'react'
// import { Button, Form, Modal } from 'react-bootstrap';
// import { agentProductAdd } from '../Services/allApis';


// function AgentProductList() {
  
//   const [addProduct,setAddProduct] = useState([{
//     name:"",photo:"",price:""
//   }])
//   const token = localStorage.getItem("token");

//   console.log(addProduct);
//   const [show, setShow] = useState(false);
//   const [photo,setPhoto] = useState(null)
//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);

//   const handleImageChange = async(e)=>{
//     const file =e.target.files[0]
//     setPhoto(file)
//     setAddProduct((prevDetails)=>({
//       ...prevDetails,
//       image:file
//     }))
//   }

//   const addProductData =async() => {
//     const formData = new FormData();
//     formData.append("name",addProduct.name)
//     formData.append("photo",addProduct.photo)
//     formData.append("price",addProduct.price)

//     const reqHeaders = {
//       Authorization:`Bearer ${token}`,
//       "Content-Type": "multipart/form-data"
//      }

//      const response = await agentProductAdd(formData,reqHeaders)
//     console.log(response);

//   }

   
//   return (
//     <div className='align-items-center justify-content-center d-flex    mt-5 mb-5'>
//          <div className='d-flex w-50 align-items-center border rounded'>
//              <input type="text"  placeholder='Search By Products' className='form-control '/>
//              <div style={{marginLeft:'-50px'}} ><i className='fa-solid fa-magnifying-glass' ></i>
//              </div>
//          </div>
//          <div className='ms-5'>
//             <Button className='btn btn-primary ' onClick={handleShow}>ADD</Button>
//             <Modal
//         show={show}
//         onHide={handleClose}
//         backdrop="static"
//         keyboard={false}
//         style={{height:'600rem'}}
//       >
//         <Modal.Header closeButton>
//           <Modal.Title>Add Products</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//         <Form className='border border-secondary p-3'>
//             <Form.Group className="mb-3" controlId="formBasicEmail">
//             <Form.Control onChange={(e)=>setAddProduct({...addProduct,name:e.target.value})} type="text" placeholder="Enter Product Name" />
//             </Form.Group>
          
//             <Form.Group className="mb-3" controlId="formBasicEmail">
//             </Form.Group>
//             <label htmlFor="image" className='text-center'>
//                 <input  id='image' onChange={handleImageChange} className='mb-3' type="file" />
                
//             </label>
//             <Form.Group className="mb-3" controlId="formBasicEmail">
//             <Form.Control onChange={(e)=>setAddProduct({...addProduct,price:e.target.value})} type="text" placeholder="Enter Product Price"  />
//             </Form.Group>
            
//          </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" className='btn btn-danger me-4 ' onClick={handleClose}>
//             Close
//           </Button>
//           <Button onClick={addProductData} variant="primary" className='btn btn-warning'>Upload</Button>
//         </Modal.Footer>
//       </Modal>
//          </div>

            
      
//     </div>
//   )
// }

// export default AgentProductList
