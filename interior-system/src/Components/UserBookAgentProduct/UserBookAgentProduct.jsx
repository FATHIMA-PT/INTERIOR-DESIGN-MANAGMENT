import { TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { agentproductbookingApi, viewSingleProductDetails } from '../Services/allApis'
import Swal from 'sweetalert2'

function UserBookAgentProduct() {
    const navigate = useNavigate()
    const { designid } = useParams()
    const [num1, setNum1] = useState(Number);
    const [num2, setNum2] = useState();
    const [total, setTotal] = useState();
    const [designdetails, setDesigndetails] = useState(null);

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
        setTotal(parseInt(designdetails?.price) * Number(num2));
    }


    // view a particular item
    const token = localStorage.getItem("token")
    const headers = {
        Authorization: `Bearer ${token}`
    }


    const handleviewagentsingleproduct = async () => {
        const response = await viewSingleProductDetails(designid)
        setDesigndetails(response.data)
        console.log(designdetails);
        setAgentproductbooking(prevBooking => ({
            ...prevBooking,
            product: {
                id: response.data.id,
                Name: response.data.Name,
                photo: response.data.photo,
                Category: response.data.Category,
                price: response.data.price,
                Description: response.data.Description
            }
        }));
        console.log(agentproductbooking)

    }




    const handleagentproductbooking = async (e) => {
        e.preventDefault();
        const { name, email, contact_no, address, product } = agentproductbooking;
        if (!name || !email || !contact_no || !address || !product) {
            alert("Please fill the form completely");
        }
        else {
            try {
                const result = await agentproductbookingApi(designid, agentproductbooking, headers)
                console.log(result)
                if (result.status === 200 || result.status === 201 ) {
                   alert('booking completed')

                    navigate('/thankyou')

                }
                else if (result.status !== 200) {
                    alert(result.response.data.error);
                  }
                }
                 catch (error) {
                console.log(error);
            }
        }
    }

    console.log(agentproductbooking);



    if (designdetails === null) return (<></>)



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
                                    onChange={(e) => setAgentproductbooking({ ...agentproductbooking, name: e.target.value })}
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
                                    onChange={(e) => setAgentproductbooking({ ...agentproductbooking, email: e.target.value })}
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
                                    onChange={(e) => setAgentproductbooking({ ...agentproductbooking, contact_no: e.target.value })}
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
                                    onChange={(e) => setAgentproductbooking({ ...agentproductbooking, address: e.target.value })}
                                    required
                                />
                            </div>

                            <div className="mb-4 mt-5 d-flex justify-content-center align-items-center  ">
                                <Button
                                    onClick={handleagentproductbooking}
                                    variant="outlined"
                                    className="btn btn-success text-dark me-4"
                                >
                                    BOOK NOW

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
                                value={designdetails.price}
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
        </>)
}

export default UserBookAgentProduct