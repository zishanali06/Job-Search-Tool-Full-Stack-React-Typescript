import * as React from 'react';
import { useState, useEffect } from 'react';
import { json } from '../../utils/api';
import moment from 'moment';

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

    const cstyle = {
        width: '20em'
    }

    const getJobs = async () => {
        try {
            let jobs = await json('/api/jobs/1');
            console.log(jobs);
            setJobs(jobs);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getJobs();
    }, [])

    return (<>
        {jobs.map((job) => {
            return (
                <section className="card text-center mb-2" key={job.id} style={cstyle}>
                    <section className="card-header">
                        {job.status}
                    </section>
                    <section className="card-body">
                        <h5 className="card-title">{job.jobtitle} @ {job.company}</h5>
                        <a href="#" className="btn btn-primary btn-sm">View App</a>
                    </section>
                    <section className="card-footer text-muted">
                        {moment(job.date).fromNow()}
                </section>
                </section>
            )
        })}



    </>);
}

export default Jobcard;