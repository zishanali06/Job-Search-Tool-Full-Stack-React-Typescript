import * as React from 'react';
import { useState, useEffect } from 'react';
import { json } from '../../utils/api';
import moment from 'moment';

export interface EventsProps {

}

export interface Event {
    id: number,
    userid: number,
    type: string,
    company: string,
    description: string,
    date: string,
    _created: string,
}

const dstyle = {
    width: '90%',
    fontSize: '.75em',
    margin: '1em'
};

const Events: React.SFC<EventsProps> = () => {

    const [events, setEvents] = useState<Array<Event>>([{
        id: null,
        userid: null,
        type: null,
        company: null,
        description: null,
        date: null,
        _created: null
    }])

    const getTasks = async () => {
        try {
            let data = await json('/api/events');
            setEvents(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getTasks();
    }, []);


    return (
    <>
            <table style={dstyle}>
            <tbody>
                <tr className="border" key={123}>
                    <th className="border bg-dark text-light">Date</th>
                    <th className="border bg-dark text-light">Type</th>
                    <th className="border bg-dark text-light">Company</th>
                    <th className="border bg-dark text-light">Description</th>
                </tr>
                {events.map((task, index) => {
                    let newdate = moment(task.date).format('MMM Do, YYYY');
                    return (
                        <tr className='' key={index}>
                            <td className='p-2'>{newdate}</td>
                            <td>{task.type}</td>
                            <td>{task.company}</td>
                            <td>{task.description}</td>
                        </tr>
                    )
                })}
            </tbody>
            </table>
    </>);
}

export default Events;