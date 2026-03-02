import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import svceLogo from '../assets/svce-logo.png';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        const newState = !mobileMenuOpen;
        setMobileMenuOpen(newState);
        if (newState) {
            document.body.classList.add('menu-open');
        } else {
            document.body.classList.remove('menu-open');
        }
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
        document.body.classList.remove('menu-open');
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${mobileMenuOpen ? 'mobile-nav-open' : ''}`}>
            <div className="nav-container">
                <Link to="/" className="logo-container" style={{ textDecoration: 'none' }} onClick={closeMobileMenu}>
                    <img src={svceLogo} alt="SVCE Logo" className="logo-img-svce" />
                </Link>

                <div className="mobile-toggle" onClick={toggleMobileMenu}>
                    <div className={`bar ${mobileMenuOpen ? 'animate' : ''}`}></div>
                </div>

                <div className={`nav-links ${mobileMenuOpen ? 'mobile-active' : ''}`}>
                    <Link to="/" className="nav-link" onClick={closeMobileMenu}>
                        <span>Home</span>
                    </Link>

                    <Link to="/events" className="nav-link" onClick={closeMobileMenu}>
                        <span>Events</span>
                    </Link>

                    <Link to="/schedule" className="nav-link" onClick={closeMobileMenu}>
                        <span>Schedule</span>
                    </Link>

                    <Link to="/passes" className="nav-link" onClick={closeMobileMenu}>
                        <span>Get Passes</span>
                    </Link>

                    <Link to="/sponsors" className="nav-link" onClick={closeMobileMenu}>
                        <span>Sponsors</span>
                    </Link>

                    <Link to="/team" className="nav-link" onClick={closeMobileMenu}>
                        <span>Team</span>
                    </Link>

                    <Link to="/faq" className="nav-link" onClick={closeMobileMenu}>
                        <span>FAQ</span>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
