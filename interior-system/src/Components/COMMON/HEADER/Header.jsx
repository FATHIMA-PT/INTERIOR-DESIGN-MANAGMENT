
import React from 'react'
import './Header.css'
import { Link, useLocation } from 'react-router-dom'
import { useCart, useWishlist } from '../../CONTEXT/context'

function Header() {

    const { cartCount } = useCart();
    const { wishlistCount } = useWishlist();


    
  const location=useLocation().pathname
  const isLogin = location === '/'
  const isRegister = location === '/register'

//   product
  const isProducts = location === '/products'
  const isWishlist=location==='/wishlist'
  const isCart=location==='/cart'

  //   agent
  const isAgentLogin=location === '/agentloginprofile'
  const isAgentcontactus=location === '/agentcontact-us'
  const isAgentaboutus=location === '/agentabout-us'
  const isAgentproductlist = location === '/agentproductlist'
  
  const handleLogout = () => {
    // Clear the local storage
    localStorage.clear();

    // You may also want to redirect the user to the login page or perform any other necessary actions
    // Example: window.location.href = '/login';
  };

    return (
        <div>
            {/* Header */}
            <header >
                {/* logo */}
                <div className="logo">
                    <img className='logo-image' src="https://i.pinimg.com/564x/67/f8/0d/67f80dfb909022631a1a1780c4efe870.jpg" alt="" />
                    {
                        isLogin || isRegister ?
                            <h6>Interior Harmony</h6>
                            :
                            <Link to={'/home-page'} style={{textDecoration:'none'}}><h6>Interior Harmony</h6></Link>
                    }
                </div>

                {/* Navigation links */}
                 
                    <nav>
                    
                     {
                        isAgentLogin || isAgentaboutus || isAgentcontactus || isAgentproductlist ?
                        <ul style={{display: isLogin || isRegister ? 'none' : ''}}>
                            <li><Link to={'/agentloginprofile'} className='nav-links'>Home</Link></li>
                            <li><Link to={'/agentproductlist'} className='nav-links'>Products</Link></li>
                            <li><Link to={'/agentcontact-us'} className='nav-links'>Contact Us</Link></li>
                            <li><Link to={'/agentabout-us'} className='nav-links'>About Us</Link></li>
                            <li><Link to={'/'}  onClick={handleLogout} className='nav-links'>Logout</Link></li>
                        </ul>
                        :
                        
                        <>
                        {
                        isProducts || isWishlist || isCart ?
                            <ul style={{display: isLogin || isRegister ? 'none' : ''}}>
                                <li><Link to={'products'} className='nav-links'>Products</Link></li>
                                <li><Link to={'/wishlist'} className='nav-links'>Wishlist <span class="badge bg-light text-warning ms-1 rounded-pill">{wishlistCount }</span></Link></li>
                                <li><Link to={'/cart'} className='nav-links'>Cart<span class="badge bg-light text-warning ms-1 rounded-pill">{cartCount}</span></Link></li>
                                <li><Link to={'/'}  onClick={handleLogout} className='nav-links'>Logout</Link></li>
                            </ul>
                            : 
                            <ul style={{display: isLogin || isRegister ? 'none' : ''}}>
                            <li><Link to={'/home-page'} className='nav-links'>Home</Link></li>
                            <li>
                                <Link className='nav-links'>Services</Link>
                                <ul className='dropdown'>
                                    <li><Link to={'/home'} className='dropdown-links'>Home</Link></li>
                                    <li><Link to={'/office'} className='dropdown-links'>Office</Link></li>
                                </ul>
                            </li>
                            <li><Link to={'products'} className='nav-links'>Products</Link></li>
                            <li><Link to={'/gallery'} className='nav-links'>Gallery</Link></li>
                            <li><Link to={'/contact-us'} className='nav-links'>Contact Us</Link></li>
                            <li><Link to={'/about-us'} className='nav-links'>About Us</Link></li>
                            <li><Link to={'/'}  onClick={handleLogout} className='nav-links'>Logout</Link></li>
                        </ul>

                      

                    }
                        </>
                       }

                </nav>
                 

            </header>
        </div>
    )
}

export default Header



// import React from 'react'
// import './Header.css'
// import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'



// function Header() {
//     return (
//         <div>
//             <Navbar expand="lg" className="bg-dark">
//                 <Container>
//                     <Navbar.Brand href="#home" className='d-flex align-items-center'>
//                         <img className='logo-image img img-fluid' src="https://i.pinimg.com/564x/67/f8/0d/67f80dfb909022631a1a1780c4efe870.jpg" alt="" />
//                         <h6 className="mx-4 custom-nav-color">Interior Harmony</h6>
//                     </Navbar.Brand>
//                     <Navbar.Toggle aria-controls="basic-navbar-nav" />
//                     <Navbar.Collapse id="basic-navbar-nav">
//                         <Nav className="ms-auto">
//                             <Nav.Link href="#home" className="custom-nav-color">Home</Nav.Link>
//                             <Nav.Link href="#link" className="custom-nav-color">Link</Nav.Link>
//                             <NavDropdown title="Dropdown" id="basic-nav-dropdown" className="custom-nav-color">
//                                 <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//                                 <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
//                                 <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//                                 {/* <NavDropdown.Divider /> */}
//                                 <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
//                             </NavDropdown>

//                         </Nav>
                       
//                     </Navbar.Collapse>
//                 </Container>
//             </Navbar>
//         </div>
//     )
// }

// export default Header