import * as React from 'react';
import { Link } from 'react-router-dom';

export interface NavbarProps {
    
}
const imgstyle ={
    width: '50px',
    height: '50px'
}

const Navbar: React.SFC<NavbarProps> = () => {
    return ( <>
        <nav className="d-flex justify-content-between border-bottom shadow-sm bg-white">
        <section>
            <Link to="/" className="logofont"><img src="/images/js.jpg" alt="" style={imgstyle} className="ml-5 my-1"></img></Link>
        </section>
        <section>
            <img src="/images/dash.png" alt="" style={imgstyle} className="mr-5"></img>
        </section>
    </nav>
    </> );
}

export default Navbar;