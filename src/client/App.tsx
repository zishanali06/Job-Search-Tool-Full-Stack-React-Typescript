import * as React from 'react';

import './scss/app';
import Lander from './views/Lander';
import Userdash from './views/Userdash';

interface IAppProps {

}

const App: React.SFC<IAppProps> = props => {


    return ( 
        <>
        <Userdash />
        </>
    )
}

export default App;