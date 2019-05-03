import * as React from 'react';
import { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import { json } from '../utils/api';
import { RouteComponentProps } from 'react-router';

export interface AddeventProps extends RouteComponentProps {

}

const Addevent: React.SFC<AddeventProps> = (props) => {

    const [type, setType] = useState('Phone Call');
    const [company, setCompany] = useState('');
    const [desc, setDesc] = useState('');
    const [date, setDate] = useState(new Date());

    const ondChange = (date: Date) => {
        setDate(date);
    }

    const add = async (e: React.MouseEvent) => {
        e.preventDefault();
        let event = {
            userid: 1,
            type: type,
            company: company,
            date: date,
            description: desc
        };
        try {
            let data = await json('/api/events/add', 'POST', event);
            console.log(data);
            props.history.push('/');
        } catch (error) {
            console.log(error);
        }
    }

    return (<>
        <section className="row mb-4">
            <h1 className='ml-5 mt-3 text-muted'>Add Event</h1>
        </section>
        <section className="row d-flex justify-content-center">
            <section className="col-6">
                <form>
                    <section className="form-group">
                        <label>Company</label>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                            value={company}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCompany(e.target.value)}
                        />
                    </section>
                    <section className="form-group">
                        <label>Category</label>
                        <select className="form-control" id="exampleFormControlSelect1" value={type} onChange={(e) => setType(e.target.value)}>
                            <option value='Phone Call'>Phone Call</option>
                            <option value='Interview'>Interview</option>
                            <option value='Meeting'>Meeting</option>
                        </select>
                    </section>
                    <section className="form-group">
                        <label>Description</label>
                        <textarea
                            className="form-control"
                            id="exampleFormControlInput1"
                            value={desc}
                            rows={3}
                            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setDesc(e.target.value)}
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

export default Addevent;