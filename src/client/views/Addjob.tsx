import * as React from 'react';
import { useState } from 'react';
import Calendar from 'react-calendar';
import { json, User } from '../utils/api';
import { RouteComponentProps } from 'react-router';

export interface AddjobProps extends RouteComponentProps {

}

const Addjob: React.SFC<AddjobProps> = (props) => {

    const [status, setStatus] = useState('Interested');
    const [company, setCompany] = useState('');
    const [courl, setCourl] = useState('Phone Call');
    const [city, setCity] = useState('');
    const [date, setDate] = useState(new Date());
    const [appurl, setAppurl] = useState('');
    const [state, setState] = useState('');
    const [jobtitle, setJobtitle] = useState('');

    const ondChange = (date: Date) => {
        setDate(date);
    }

    const add = async (e: React.MouseEvent) => {
        e.preventDefault();
        let job = {
            userid: User.userid,
            company: company,
            companyurl: courl,
            date: date,
            jobtitle: jobtitle,
            state: state,
            appurl: appurl,
            city: city,
            status: status
        };
        try {
            let data = await json('/api/jobs/add', 'POST', job);
            props.history.push('/dashboard');
        } catch (error) {
            console.log(error);
        }
    }

    return (<>
        <section className="row mb-4">
            <h1 className='ml-5 mt-3 text-muted'>Add Job</h1>
        </section>
        <section className="row d-flex justify-content-center">
            <section className="col-6">
                <form>
                    <section className="form-group">
                        <label>Status</label>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                            value={status}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setStatus(e.target.value)}
                        />
                    </section>
                    <section className="form-group">
                        <label>Job Title</label>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput2"
                            value={jobtitle}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setJobtitle(e.target.value)}
                        />
                    </section>
                    <section className="form-group">
                        <label>Company</label>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput3"
                            value={company}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCompany(e.target.value)}
                        />
                    </section>
                    <section className="form-group">
                        <label>Company URL</label>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput4"
                            value={courl}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCourl(e.target.value)}
                        />
                    </section>
                    <section className="form-group">
                        <label>App URL</label>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput5"
                            value={appurl}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAppurl(e.target.value)}
                        />
                    </section>
                    <section className="form-group">
                        <label>City</label>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput6"
                            value={city}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCity(e.target.value)}
                        />
                    </section>
                    <section className="form-group">
                        <label>State: ex. TX</label>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput7"
                            value={state}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setState(e.target.value)}
                        />
                    </section>
                    <section className="form-group">
                        <Calendar
                            onChange={ondChange}
                            value={date}
                        />
                    </section>
                    <button className="btn btn-primary" onClick={e => add(e)}>Add Event</button>
                </form>
            </section>
        </section>
    </>);
}

export default Addjob;