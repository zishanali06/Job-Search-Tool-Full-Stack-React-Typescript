import * as React from 'react';
import Events from './Events';
import { Link } from 'react-router-dom';

export interface EventdashProps {

}

const Eventdash: React.SFC<EventdashProps> = () => {

    return (<>
        <section className="row border border-info mx-2 shadow d-flex justify-content-center rounded bg-white">
            <h4 className="col-12 text-center my-4 d-flex justify-content-around">Upcoming Events<Link to="/add/event" className="btn btn-primary">Add Event</Link></h4>
            <Events />
        </section>
    </>);
}

export default Eventdash;