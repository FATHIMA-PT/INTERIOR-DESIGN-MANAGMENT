import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function AgentViewBooking() {
  // Check if there's a saved state in session storage, otherwise default to false
  const [clicked, setClicked] = useState(sessionStorage.getItem('buttonClicked') === 'true');

  const handleClick = () => {
    setClicked(true);
  };

  useEffect(() => {
    // Save the clicked state to session storage
    sessionStorage.setItem('buttonClicked', clicked);
  }, [clicked]);
    return (
        <div style={{ marginTop: '50px', marginBottom: '50px' }}>
            <>
                <div className='row ms-5 me-5 ' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} >
                    <div className='col-md-8'>
                        <table className='container table mt-5 rounded shadow border'>
                            <thead>
                                <tr className='text-center'>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th> Email</th>
                                    <th>Contact No</th>
                                    <th>Address</th>
                                    <th>Product Name</th>
                                    <th>Product Image</th>
                                    <th>Sq.ft</th>
                                    <th>Conformed</th>

                                </tr>
                            </thead>
                            <tbody>

                                <tr>
                                    <td className='text-center'>aa</td>
                                    <td className='text-center'>aa</td>
                                    <td className='text-center'>aaa</td>
                                    <td className='text-center'>aa </td>
                                    <td className='text-center'>aa</td>
                                    <td className='text-center'>aa</td>
                                    <td> <img width={'100px'} height={'100px'} alt="" /></td>
                                    <td className='text-center'>aa</td>
                                    <td>
                                        <button className={`btn p-4`} onClick={handleClick}>
                                            <i className={`fa-solid fa-check text-${clicked ? 'success' : 'danger'}`} style={{ fontSize: '30px' }}></i>
                                        </button>
                                    </td>

                                </tr>
                            </tbody>

                        </table>
                    </div>

                </div>
            </>


        </div>
    )
}

export default AgentViewBooking