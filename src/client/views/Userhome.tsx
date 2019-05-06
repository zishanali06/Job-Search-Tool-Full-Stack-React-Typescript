import * as React from 'react';
import Eventdash from '../components/events/Eventdash';
import Jobdash from '../components/jobs/Jobdash';
import Status from '../components/dash/Status';
import { useEffect } from 'react';
import { User } from '../utils/api';
import { RouteComponentProps } from 'react-router';

export interface UserhomeProps extends RouteComponentProps {
    
}

const Userhome: React.SFC<UserhomeProps> = (props) => {

    useEffect(() => {
        if (!User || User.userid === null || User.role !== 'user') {
            props.history.push('/login');
        };
    }, []);
    
    return (<>
    <section className="row mb-4">
    <h1 className='ml-5 mt-5 text-muted'>Dashboard</h1>
    </section>
        <section className="row p-3">
            <section className="col-md-6">
            <Eventdash />
            </section>
            <section className="col-md-6">
            <Status />
            <Jobdash />
            </section>
        </section>
    </>);
}

export default Userhome;