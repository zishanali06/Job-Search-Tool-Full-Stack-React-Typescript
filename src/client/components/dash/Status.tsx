import * as React from 'react';
import { useState, useEffect } from 'react';
import { json } from '../../utils/api';

export interface StatusProps {

}

const Status: React.SFC<StatusProps> = () => {

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

    return (
        <section className="d-flex justify-content-center">
            <section className="row border border-info mx-3 mb-4 shadow d-flex justify-content-center rounded bg-white col-3 p-3"><h6>Applied</h6>
                <h1>{app}</h1>
            </section>
            <section className="row border border-info mx-4 mb-4 shadow d-flex justify-content-center rounded bg-white col-3 p-3"><h6>Interviews</h6>
                <h1>1</h1>
            </section>
            <section className="row border border-info mx-3 mb-4 shadow d-flex justify-content-center rounded bg-white col-3 p-3"><h6>Offers</h6>
                <h1>0</h1>
            </section>
        </section>
    );
}

export default Status;