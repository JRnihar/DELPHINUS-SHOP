import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import './Header.module.css'
import auth from '../../firebase.init';
import CustomLink from '../CustomLink/CustomLink';
import Loading from '../Loading/Loading';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const [user, loading] = useAuthState(auth);
    const navigate=useNavigate()

    const handleSignOut = () => {

        signOut(auth);
        navigate('/home')
    }
    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <Navbar  collapseOnSelect expand="lg"  className=' bg-white shadow-sm'>
                <Container>
                    <Navbar.Brand  className='logo'>DELPHINUS-SHOP</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link className='text-dark' as={CustomLink} to="home">Home</Nav.Link>
                            {
                                    
                                user && <>
                                    <Nav.Link className='text-dark' as={CustomLink} to="myItem">Manage Item</Nav.Link>
                                    <Nav.Link className='text-dark' as={CustomLink} to="add">Add</Nav.Link>
                                    <Nav.Link className='text-dark' as={CustomLink} to="orders">My Item</Nav.Link>
                                </>
                            }
                            
                            <Nav.Link className='text-dark' as={CustomLink} to="blog">Blog</Nav.Link>
                            {
                                user
                                ?
                                    <button onClick={handleSignOut} className='btn btn-primary rounded-pill ms-3'><i class="fa-solid fa-arrow-right-from-bracket"></i> LogOut</button> 

                                    

                                   : <Nav.Link className='text-dark' as={CustomLink} to="/login"><button className='btn btn-primary rounded-pill ms-3'> <i class="fa-solid fa-right-to-bracket me-2"></i> Login</button></Nav.Link>
                                    
                                    
                            }
                        
                        </Nav>
                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;