import * as React from 'react';
import { useState, useEffect } from 'react';
import { Job } from '../components/jobs/Jobcard';
import { json } from '../utils/api';
import { RouteComponentProps } from 'react-router';

export interface SinglejobProps extends RouteComponentProps<{ id: string }> {

}

const Singlejob: React.SFC<SinglejobProps> = (props) => {

    const [job, setJob] = useState<Job>({
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
    });

    const getJob = async () => {
        try {
            let job = await json(`/api/jobs/single/${props.match.params.id}`);
            console.log(job);
            setJob(job);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getJob();
    }, [])


    return (
        <>
            <section>
                <h1>{job.jobtitle}Hello</h1>
            <p>{job.state}</p>
            </section>
        </>
    );
}

export default Singlejob;