import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from '../components/nav/Navbar';
import Userhome from './Userhome';

export interface UserdashProps {

}

const Userdash: React.SFC<UserdashProps> = () => {
    return (
        <>
            <Router>
                <Navbar />
                <main className="container">
                    <Switch>
                        <Route exact path="/" component={Userhome} ></Route>
                    </Switch>
                </main>
            </Router>
        </>
    );
}

export default Userdash;