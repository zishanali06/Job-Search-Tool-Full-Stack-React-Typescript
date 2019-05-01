import * as React from 'react';
import { Link } from 'react-router-dom';

export interface NavbarProps {
    
}

const Navbar: React.SFC<NavbarProps> = () => {
    return ( <>
        <nav className="d-flex justify-content-center">
        <ul className="mt-3">
            <li className="linav"><Link to="/" className="">Home</Link></li>
        </ul>
    </nav>
    </> );
}

export default Navbar;