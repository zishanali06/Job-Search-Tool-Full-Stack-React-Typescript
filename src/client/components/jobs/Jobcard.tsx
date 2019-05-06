import * as React from 'react';
import { useState, useEffect } from 'react';
import { json, User } from '../../utils/api';
import moment from 'moment';
import { useTransition, animated } from 'react-spring';
import { Link } from 'react-router-dom';

export interface JobcardProps {

}

export interface Job {
    id: number;
    userid: number;
    status: string;
    company: string;
    companyurl: string;
    appurl: string;
    date: string;
    city: string;
    state: string;
    jobtitle: string;
}
const Jobcard: React.SFC<JobcardProps> = () => {

    const [jobs, setJobs] = useState<Array<Job>>([{
        id: null,
        userid: null,
        status: null,
        company: null,
        companyurl: null,
        appurl: null,
        date: null,
        city: null,
        state: null,
        jobtitle: null
    }]);

    const transitions = useTransition(jobs, (jobs: Job) => jobs.id, {
        trail: 100,
        from: { transform: 'translate3d(50px, 40px, 0)' },
        enter: { transform: 'translate3d(0,0px, 0)' }
    })

    const cstyle = {
        width: '20em'
    }

    let abort = true;

    const getJobs = async () => {
        abort = true;
        try {
            let jobs = await json(`/api/jobs/${User.userid}`);
            console.log(jobs);
            if(abort === true){
                setJobs(jobs);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getJobs();
        return () => abort = false;
    }, [])

    return (<>
        {transitions.map(({ item, key, props }) => {
            if(item.jobtitle === null){
                return <div key={key}></div>
            }
            return (
                <animated.div key={item.id} style={props}>
                    <section className="card text-center mb-2 shadow-sm" style={cstyle}>
                        <section className="card-header">
                            {item.status}
                        </section>
                        <section className="card-body">
                            <h5 className="card-title">{item.jobtitle} @ {item.company}</h5>
                            <Link to={`/job/${item.id}`} className="btn btn-primary btn-sm">View App</Link>
                        </section>
                        <section className="card-footer text-muted">
                            {moment(item.date).fromNow()}
                        </section>
                    </section>
                </animated.div>
            )
        })}
    </>);
}

export default Jobcard;