
import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div>
            {/* Header */}
            <header >
                {/* logo */}
                <div className="logo">
                    <img className='logo-image' src="https://i.pinimg.com/564x/67/f8/0d/67f80dfb909022631a1a1780c4efe870.jpg" alt="" />
                    <h6>Interior Harmony</h6>
                </div>

                {/* Navigation links */}
                <nav>
                    <ul>
                        <li><Link to={'/'} className='nav-links'>Home</Link></li>
                        <li><Link to={'/home'} className='nav-links'>Services</Link></li>
                        <li><Link to={''} className='nav-links'>Products</Link></li>
                        <li><Link to={'/gallery'} className='nav-links'>Gallery</Link></li>
                        <li><Link to={''} className='nav-links'>Contact Us</Link></li>
                        <li><Link to={''} className='nav-links'>About Us</Link></li>
                    </ul>

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