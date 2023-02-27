import {Navbar, Nav, Container, Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {FaGithub, FaTwitter, FaAngellist, FaLinkedin} from 'react-icons/fa'

const Header = () => {

    return <header>
        
        <Navbar>
        <Container fluid='md'>
            <Row>
                <Col md={3}>
                    <Navbar.Brand as={Link} to='/'><img src={require('../assets/nav/logo.svg').default} /></Navbar.Brand>
                </Col>
                <Col md={9}>
                    <Nav>
                        <Nav.Item>
                            <Nav.Link href='https://github.com/josef-kretz'><FaGithub /></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href='https://twitter.com/josef_kretz'><FaTwitter /></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href='https://angel.co/u/josef-kretz'><FaAngellist /></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href='https://www.linkedin.com/in/josef-kretz'><FaLinkedin /></Nav.Link>
                        </Nav.Item>
                        <Nav.Item className='contactLink'>
                            <Nav.Link as={Link} to='/contact'>Contact Me</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
            </Row>
            </Container>
        </Navbar> 
    </header>
}

export default Header