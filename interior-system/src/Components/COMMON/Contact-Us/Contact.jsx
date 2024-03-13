import { TextField, Button } from '@mui/material'
import React from 'react'


function Contact() {
  return (
    <>
      <div className='align-items-center justify-content-between mt-5 mb-5'>
        <div className="row">
          <div className="col-lg-6 ">
            <img src="https://i.postimg.cc/wvNDf9xh/pexels-marta-dzedyshko-2067638.jpg" className='img img-fluid' style={{ width: '500px', marginLeft: '100px', height: '550px' }} alt="" />
          </div>
          <div className="col-lg-6 ">
            <form action="">
              <div className='mb-4 mt-5 d-flex justify-content-center align-items-center '>
                <i className="fa-solid fa-user mt-3 me-2 "></i>
                <TextField style={{ fontSize: '' }} id="standard-basic1" label="Name" variant="standard" className='w-75 ' name='name' />
              </div>

              <div className='mb-4 mt-5 d-flex justify-content-center align-items-center  '>
                <i className="fa-solid fa-envelope mt-3 me-2 "></i>
                <TextField id="standard-basic1" label="Email-id" variant="standard" className='w-75' name='name' />
              </div>

              <div className='mb-4 mt-5 d-flex justify-content-center align-items-center  '>
                <i className="fa-solid fa-phone mt-3 me-2"></i>
                <TextField id="standard-basic1" label="Contact-Number" variant="standard" className='w-75' name='name' />
              </div>


              <div className='mb-4 mt-5 d-flex justify-content-center align-items-center  '>
                <TextField id="outlined-basic" label="Text Here..." variant="outlined" className='w-75' />
              </div>


              <div className='mb-4 mt-5 d-flex justify-content-center align-items-center  '>
                <Button variant="outlined" className='btn btn-success text-dark me-4'>SUBMIT</Button>
                <Button variant="outlined" className='btn btn-danger text-dark me-4'>CANCEL</Button>

              </div>







            </form>
          </div>
        </div>

      </div>

    </>
  )
}

export default Contact
