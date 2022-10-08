import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';

const Mainnavbar = () => (

    // <nav>
    //         <h1>PICKLE BALL APP</h1>
    //     <li>
        
    //         <Link to='/'>
    //             <li>Home</li>
    //         </Link>
    //         <Link to='/login'>
    //             <li>Login</li>
    //         </Link>
        
    //     </li>
    // </nav>
        <Navbar>
            <Container>
                <Link
                    to='/'
                 >
                    <Navbar.Brand>Home</Navbar.Brand>
                </Link>
                <Link
                    to='/login'
                 >
                    <Navbar.Brand>Login</Navbar.Brand>
                </Link>
        
            
            </Container>
        </Navbar>
)

export default Mainnavbar;
