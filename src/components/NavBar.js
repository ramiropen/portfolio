import {useState, useEffect} from 'react';
import {Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../logo.svg';
//I still need to get icons and img's, import also----------------------->

export const NavBar = () => {
    const [activelink, setActivelink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
            <Navbar.Brand href="#home">
                <img src={'https://react-bootstrap.github.io/logo.svg'} alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home" className={activelink === 'home' ? 'active navbar-link' : 'navbar-link'} onCLick={() => setActivelink('home')}>Home</Nav.Link>
                <Nav.Link href="#skills" className={activelink === 'skills' ? 'active navbar-link' : 'navbar-link'} onCLick={() => setActivelink('skills')}>Skills</Nav.Link>
                <Nav.Link href="#projects" className={activelink === 'projects' ? 'active navbar-link' : 'navbar-link'} onCLick={() => setActivelink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
                <div className="social-icon">
                    <a href="#"><img src={'https://react-bootstrap.github.io/logo.svg'} alt="Logo" /></a>
                    <a href="#"><img src={'https://react-bootstrap.github.io/logo.svg'} alt="Logo" /></a>
                    <a href="#"><img src={'https://react-bootstrap.github.io/logo.svg'} alt="Logo" /></a>
                </div>
                <button className="vvd" onCLick={() => console.log('connect')}><span>Let’s Connect</span></button>
            </span>

            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
}
