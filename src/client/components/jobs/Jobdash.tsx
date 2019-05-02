import * as React from 'react';
import Events from '../events/Events';
import { Link } from 'react-router-dom';

export interface JobdashProps {

}

const Jobdash: React.SFC<JobdashProps> = () => {

    return (<>
        <section className="row border border-info mx-2 shadow d-flex justify-content-center rounded bg-white">
            <h4 className="col-12 text-center my-4 d-flex justify-content-around">Job Applications<Link to="/add/event" className="btn btn-primary">Add Task</Link></h4>
            <Events />
        </section>
    </>);
}

export default Jobdash;