import { TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import { officecategorysingleitemAPI, officedesignbookingAPI } from '../Services/allApis'
import Swal from 'sweetalert2'

function Officebooking() {

    const { id } = useParams()
    const [officedesigndetails, setOfficedesigndetails] = useState(null)
    const [num1, setNum1] = useState(Number);
    const [num2, setNum2] = useState();
    const [total, setTotal] = useState();


    const [homebooking, setHomebooking] = useState({
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
        handleviewoffice()

    }, [])

    // calculation
    const handleClick = () => {
        console.log(num2);
        console.log(num1);
        setTotal(parseInt(officedesigndetails?.price) * Number(num2));
    }


    // view a particular item
    const token = localStorage.getItem("token")
    const headers = {
        Authorization: `Bearer ${token}`
    }
    const handleviewoffice = async () => {
        const response = await officecategorysingleitemAPI(id, headers)
        setOfficedesigndetails(response.data)
        //  console.log(officedesigndetails.price);
        setHomebooking(prevBooking => ({
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
        console.log(officedesigndetails)

    }

    const handleofficebooking = async (e) => {
        e.preventDefault();
        const { name, email, contact_no, address, product } = homebooking;
        if (!name || !email || !contact_no || !address || !product) {
            alert("Please fill the form completely");
        }
        else {
            try {
                const result = await officedesignbookingAPI(id, homebooking, headers)
                console.log(result)
                let timerInterval;
                Swal.fire({
                    title: "Auto close alert!",
                    html: "Conform Booking in <b></b> milliseconds.",
                    timer: 2000,
                    timerProgressBar: true,
                    didOpen: () => {
                        Swal.showLoading();
                        const timer = Swal.getPopup().querySelector("b");
                        timerInterval = setInterval(() => {
                            timer.textContent = `${Swal.getTimerLeft()}`;
                        }, 100);
                    },
                    willClose: () => {
                        clearInterval(timerInterval);
                    }
                }).then((result) => {
                    /* Read more about handling dismissals below */
                    if (result.dismiss === Swal.DismissReason.timer) {
                        console.log("I was closed by the timer");
                    }
                });
            } catch (error) {
                console.log(error);
            }
        }
    }

    console.log(homebooking);


    console.log(id);

    if (officedesigndetails === null) return (<></>)


    return (
        <>
            <div className="align-items-center justift-content-center " style={{ marginTop: '100px' }}>
                <div className="row">
                    <div className="col-lg-4 mt-5 border rounded ms-5 mb-5 shadow-lg">
                        <h4 className="text-center mt-5" style={{color:'var(--main-color)'}}>{officedesigndetails?.Name}</h4>
                        <div className="mb-4 mt-5 d-flex justify-content-between align-items-center ">
                            <TextField
                                onChange={(e) => {
                                    setNum1(e.target.value)
                                }}
                                className="mt-3"
                                id="outlined-basic"
                                label=""
                                variant="outlined"
                                value={parseInt(officedesigndetails?.price)}
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
                                className="btn btn-outline-warning text-warning bg-dark">
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
                                    onChange={(e) => setHomebooking({ ...homebooking, name: e.target.value })}
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
                                    onChange={(e) => setHomebooking({ ...homebooking, email: e.target.value })}
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
                                    onChange={(e) => setHomebooking({ ...homebooking, contact_no: e.target.value })}
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
                                    onChange={(e) => setHomebooking({ ...homebooking, address: e.target.value })}
                                    required
                                />
                            </div>

                            <div className="mb-4 mt-5 d-flex justify-content-center align-items-center  ">
                                <Button
                                    onClick={handleofficebooking}
                                    variant="outlined"
                                    className="btn btn-outline-warning text-warning bg-dark me-4"
                                >
                                    <Link to={`/thankyou`} className="text-warning" style={{ textDecoration: "none" }}> BOOK NOW</Link>

                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>)
}

export default Officebooking