import { Link } from 'react-router-dom';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';

import { AuthConsumer } from '../../providers/AuthProvider';


const Mainnavbar = (user, handleLogout) => (

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
                <Button onClick={() => handleLogout() }>
                    <Navbar.Brand>Logout</Navbar.Brand>
                </Button>
            
            </Container>
        </Navbar>
)

const ConnectedMainNavbbar = (props) => (
    <AuthConsumer>
        { value => <Mainnavbar {...props} {...value} />}
    </AuthConsumer>
)

export default ConnectedMainNavbbar;
