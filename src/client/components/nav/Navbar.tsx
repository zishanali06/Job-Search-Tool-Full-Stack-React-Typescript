import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { useEffect, useState} from 'react';
import { User } from '../../utils/api';

export interface NavbarProps {
    
}
const imgstyle ={
    width: '50px',
    height: '50px'
}

const Navbar: React.SFC<NavbarProps> = () => {

    const [toggleon, setToggleon] = useState(true);

    useEffect(() => {
        if (!User || User.userid === null || User.role !== 'user') {
            setToggleon(false);
        };
    }, []);
    
    if(toggleon === true){
        return ( 
            <>
                <nav className="d-flex justify-content-between border-bottom shadow-sm bg-white">
                <section>
                    <Link to="/dashboard" className="logofont"><img src="/images/js.jpg" alt="" style={imgstyle} className="ml-5 my-1"></img></Link>
                </section>
                <section>
                    <img src="/images/dash.jpg" alt="" style={imgstyle} className="mr-2 my-1"></img>
                    <img src="/images/jobs.jpg" alt="" style={imgstyle} className="mr-2 my-1"></img>
                    <img src="/images/tasks.jpg" alt="" style={imgstyle} className="mr-2 my-1"></img>
                    <img src="/images/contacts.jpg" alt="" style={imgstyle} className="mr-5 my-1"></img>
                </section>
            </nav>
            </> )
    } else {
        return <></>
    }
    ;
}

export default Navbar;