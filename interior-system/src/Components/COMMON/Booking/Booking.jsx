import { TextField } from "@mui/material";
import React, { useState } from "react";
import { Button } from "react-bootstrap";

function Booking() {
    const [num1,setNum1] = useState();
    const [num2,setNum2] = useState();
    const [total,setTotal] = useState();

    function handleClick(){
        setTotal(Number(num1) *  Number(num2));
    }


  return (
    <>
      <div className="align-items-center justift-content-center " style={{marginTop:'100px'}}>
        <div className="row">
          <div className="col-lg-4 mt-5 border rounded ms-5 mb-5 shadow-lg">
            <div className="mb-4 mt-5 d-flex justify-content-between align-items-center ">
            <TextField
               onChange={(e)=>{
                setNum1(e.target.value)
               }}
               className="mt-3"
               id="outlined-basic"
               label="Sq.ft"
               variant="outlined"
             />

              <TextField
                onChange={(e)=>{
                    setNum2(e.target.value)
                   }}
                className="mt-3"
                id="outlined-basic"
                label="Please Add Sq.ft"
                variant="outlined"
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
                />
              </div>

              <div className="mb-4 mt-5 d-flex justify-content-center align-items-center  ">
                <Button
                  variant="outlined"
                  className="btn btn-success text-dark me-4"
                >
                  BOOK NOW
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Booking;
