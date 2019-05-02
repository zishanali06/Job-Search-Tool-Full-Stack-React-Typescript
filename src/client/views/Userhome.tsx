import * as React from 'react';
import Eventdash from '../components/events/Eventdash';
import Jobdash from '../components/jobs/Jobdash';
import {useState, useEffect} from 'react';
import { json } from '../utils/api';
import Status from '../components/dash/Status';

export interface UserhomeProps {
    
}

const Userhome: React.SFC<UserhomeProps> = () => {

    const [app, setApp] = useState(0);

    const getapp = async () => {
        try {
            let data = await json('/api/jobs/applied/1');
            console.log(data);
            setApp(data.length);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getapp();
    }, [])

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