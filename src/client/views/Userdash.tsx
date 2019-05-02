import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from '../components/nav/Navbar';
import Userhome from './Userhome';
import Addevent from './Addevent';

export interface UserdashProps {

}

const Userdash: React.SFC<UserdashProps> = () => {
    return (
        <>
            <Router>
                <Navbar />
                <main className="container home bg-grey">
                    <Switch>
                        <Route exact path="/" component={Userhome} ></Route>
                        <Route exact path="/add/event" component={Addevent} ></Route>
                    </Switch>
                </main>
            </Router>
        </>
    );
}

export default Userdash;