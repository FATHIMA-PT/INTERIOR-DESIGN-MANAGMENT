import { TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import { viewSingleProductDetails } from '../Services/allApis'

function UserBookAgentProduct() {
    const {designid}=useParams()
    const [num1, setNum1] = useState(Number);
    const [num2, setNum2] = useState();
    const [total, setTotal] = useState();
    const [designDetails,setDesignDetails]=useState(null);

    const [agentproductbooking, setAgentproductbooking] = useState({
        name: null,
        email: null,
        contact_no: null,
        address: null,
        product: {
            id: null,
            Name: null,
            photo: null,
            Category: null,
            price: null,
            Description: null
        }
    });

    useEffect(() => {
        handleviewagentsingleproduct()

    }, [])


      // calculation
      const handleClick = () => {
        console.log(num2);
        console.log(num1);
        setTotal(Number(num1) * Number(num2));
    }



   const handleviewagentsingleproduct = async () => {
    const response = await viewSingleProductDetails(designid)
    setDesignDetails(response.data)
     console.log(designDetails);
    // setAgentproductbooking(prevBooking => ({
    //     ...prevBooking,
    //     product: {
    //         id: response.data.id,
    //         Name: response.data.Name,
    //         photo: response.data.photo,
    //         Category: response.data.Category,
    //         price: response.data.price,
    //         Description: response.data.Description
    //     }
    // }));
    console.log(agentproductbooking)

}

  return (
    <>
    <div className="align-items-center justift-content-center " style={{ marginTop: '100px' }}>
        <div className="row">
            <div className="col-lg-6 mt-5 mb-5 ms-5">
                <form action="">
                    <div className="mb-4 mt-5 d-flex justify-content-center align-items-center ">
                        <i className="fa-solid fa-user mt-3 me-2 "></i>
                        <TextField
                            style={{ fontSize: "" }}
                            id="standard-basic1"
                            label="Name"
                            variant="standard"
                            className="w-75 "
                            name="name"
                            // onChange={(e) => setHomebooking({ ...homebooking, name: e.target.value })}
                            required
                        />
                    </div>

                    <div className="mb-4 mt-5 d-flex justify-content-center align-items-center  ">
                        <i className="fa-solid fa-envelope mt-3 me-2 "></i>
                        <TextField
                            id="standard-basic1"
                            label="Email-id"
                            variant="standard"
                            className="w-75"
                            name="name"
                            // onChange={(e) => setHomebooking({ ...homebooking, email: e.target.value })}
                            required
                        />
                    </div>

                    <div className="mb-4 mt-5 d-flex justify-content-center align-items-center  ">
                        <i className="fa-solid fa-phone mt-3 me-2"></i>
                        <TextField
                            id="standard-basic1"
                            label="Contact-Number"
                            variant="standard"
                            className="w-75"
                            name="name"
                            // onChange={(e) => setHomebooking({ ...homebooking, contact_no: e.target.value })}
                            required
                        />
                    </div>
                    <div className="mb-4 mt-5 d-flex justify-content-center align-items-center  ">
                        <i class="fa-solid fa-address-book  mt-3 me-2"></i>
                        <TextField
                            id="standard-basic1"
                            label="Address"
                            variant="standard"
                            className="w-75"
                            name="name"
                            // onChange={(e) => setHomebooking({ ...homebooking, address: e.target.value })}
                            required
                        />
                    </div>

                    <div className="mb-4 mt-5 d-flex justify-content-center align-items-center  ">
                        <Button
                            // onClick={handleofficebooking}
                            variant="outlined"
                            className="btn btn-success text-dark me-4"
                        >
                            <Link to={`/thankyou`} className="text-light" style={{ textDecoration: "none" }}> BOOK NOW</Link>

                        </Button>
                    </div>
                </form>
            </div>

            <div className="col-lg-4 mt-5 border rounded ms-5 mb-5 shadow-lg">
                <h4 className="text-center mt-5">heading</h4>
                <div className="mb-4 mt-5 d-flex justify-content-between align-items-center ">
                    <TextField
                        onChange={(e) => {
                            setNum1(e.target.value)
                        }}
                        className="mt-3"
                        id="outlined-basic"
                        label=""
                        variant="outlined"
                        // value={designDetails.price}
                        required
                    />

                    <TextField
                        onChange={(e) => {
                            setNum2(e.target.value)
                        }}
                        className="mt-3"
                        id="outlined-basic"
                        label="Please Add Sq.ft"
                        variant="outlined"
                        required
                        value={num2}
                    />
                </div>

                <div className="mb-4 mt-5 d-flex justify-content-center align-items-center  ">
                    <Button
                        onClick={handleClick}
                        variant="outlined"
                        className="btn btn-primary text-light me-4">
                        calculate
                    </Button>
                </div>
                <div className="mb-4 mt-5 d-flex justify-content-center align-items-center  ">
                    <TextField
                        value={total}
                        className="mt-3"
                        id="outlined-basic"
                        label=" "

                    />
                </div>
            </div>
        </div>
    </div>
</>  )
}

export default UserBookAgentProduct