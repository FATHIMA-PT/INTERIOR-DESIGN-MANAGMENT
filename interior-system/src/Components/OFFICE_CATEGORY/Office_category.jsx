import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { officelistAPI } from '../Services/allApis';
import { useParams } from 'react-router-dom';

function Office_category() {


  const {id}=useParams()

  console.log(id);

  useEffect(()=>{
    handleHomelist()

  },[])

  
  const token = localStorage.getItem("token")
  const header={
    Authorization:`Bearer ${token}`
  }

  const [officelist,setOfficelist]=useState();

  // function for listing office
  const handleHomelist=async()=>{
    console.log(id);
    const response=await officelistAPI(id,header)
    console.log(response);
    setOfficelist(response.data)
  }







  return (
<div>
         <div className="align-items-center justify-content-center mb-3">
        <h2 className="text-primary fw-bolder text-center mt-5">
         OFFICE CATEGORY{" "}
        </h2>
        
          <div className="  container   justify-content-around mt-5 ">
          <div className="row" >
          {
                officelist? officelist.map(i=>(

           
              <div className="col-4">
                
              

                
                 <Card className="" style={{height:'575px'}}>
                 <Card.Img
                   variant="top"
                   className="img img-fluid p-3"
                   style={{ height: "265px" }}
                   src={i.photo}
                 />
                 <Card.Body style={{textAlign:"justify"}} >
                   <Card.Title className="text-center">
                     {i.Name}
                   </Card.Title>
                   <Card.Text>
                     {i.Description}
                   </Card.Text>
                    <Card.Text>Price:{i.price} per sq. ft.</Card.Text>
                   <Button  className="btn btn-outline-warning text-light">Book Now</Button>
                 </Card.Body>
               </Card>
              
              </div>
              
             
               )):<></>
              }
               </div>

            </div>
           
          </div>

        </div> 
          )
}

export default Office_category