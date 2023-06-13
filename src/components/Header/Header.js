import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink, useNavigate } from 'react-router-dom';


const Header = () => {
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate('/login')
    }
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                {/* <Navbar.Brand href="#home">Hỏi Dân IT</Navbar.Brand> */}
                <NavLink to='/' className='navbar-brand fw-bold'>Quiz Game</NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to='/' className='nav-link fw-bold'>Home</NavLink>
                        <NavLink to='/users' className='nav-link fw-bold'>Users</NavLink>
                        <NavLink to='/admins' className='nav-link fw-bold'>Admin</NavLink>
                        {/* <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/users">Users</Nav.Link>
                        <Nav.Link href="/admins">Admin</Nav.Link> */}

                    </Nav>
                    <Nav>
                        <button className='btn-login' onClick={() => handleLogin()}>Log In</button>
                        <button className='btn-signup'>Sign Up</button>
                        {/* <NavDropdown title="Setting" id="basic-nav-dropdown">
                            <NavDropdown.Item >Log In</NavDropdown.Item>
                            <NavDropdown.Item >Log Out</NavDropdown.Item>
                            <NavDropdown.Item >Profile</NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;