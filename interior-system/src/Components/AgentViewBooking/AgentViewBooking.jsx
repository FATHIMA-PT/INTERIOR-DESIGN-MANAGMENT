import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { agentproductbookinglistApi } from '../Services/allApis';

function AgentViewBooking() {
    // Check if there's a saved state in session storage, otherwise default to false
    const [clicked, setClicked] = useState(sessionStorage.getItem('buttonClicked') === 'true');
    const [allProducts, setAllProducts] = useState(null)
    const token = localStorage.getItem("token");



    const handleClick = () => {
        setClicked(true);
    };



    // get products
    const getProductsbookinglist = async () => {

        const id = localStorage.getItem("agentId")
        const reqHeader = {
            Authorization: ` Bearer ${token}`
        }
        console.log(id);

        try {

            const response = await agentproductbookinglistApi(id, reqHeader)

            setAllProducts(response.data)
            console.log(response);

        } catch (error) {
            console.log(error);
        }


    }



    useEffect(() => {
        // Save the clicked state to session storage
        sessionStorage.setItem('buttonClicked', clicked);
        getProductsbookinglist()

    }, [clicked]);


    return (
        <div style={{ marginTop: '50px', marginBottom: '50px' }}>
            <>
                <div className='row ms-5 me-5 ' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} >
                    <div className='col-md-8'>
                        <table className='container table mt-5 rounded shadow border'>
                            <thead>
                                <tr className='text-center'>
                                    <th>Name</th>
                                    <th> Email</th>
                                    <th>Contact No</th>
                                    <th>Address</th>
                                    <th>Product Name</th>
                                    <th>Product Image</th>
                                    <th>Conformed</th>

                                </tr>
                            </thead>
                            <tbody>



                                {allProducts && allProducts.length > 0 ? (
                                    allProducts.map((product) => (
                                        <tr>

                                            <td className='text-center'>{product.name}</td>
                                            <td className='text-center'>{product.email}</td>
                                            <td className='text-center'>{product.contact_no}</td>
                                            <td className='text-center'>{product.address}</td>
                                            <td className='text-center'>{product.product.name}</td>
                                            <td> <img src={product.product.photo} width={'100px'} height={'100px'} alt="" /></td>
                                            <td>
                                                <button className={`btn p-4`} onClick={handleClick}>
                                                    <i className={`fa-solid fa-check text-${clicked ? 'success' : 'danger'}`} style={{ fontSize: '30px' }}></i>
                                                </button>
                                            </td>
                                        </tr>


                                    ))
                                ) : (
                                    <></>
                                )}





                            </tbody>

                        </table>
                    </div>

                </div>
            </>


        </div>
    )
}

export default AgentViewBooking